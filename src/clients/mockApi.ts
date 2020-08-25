export type IssuePostBody = {
  id?: number
  user?: User
  site: string
  title: string
  initialCommentHtml: string
}

export const defaultSite = 'goalco.com'

const localStorageKeyPrefix = 'demo-issues'

function demoIssuesLocalStorageKey(site: string, id: number) {
  return `${localStorageKeyPrefix}:${site}:${id}`
}

// TODO: typecheck, perhaps rely on a library
function issueFromJson(issueJson: string): Issue {
  const issue = JSON.parse(issueJson)

  issue.initialReport.timestamp = new Date(issue.initialReport.timestamp)
  for (const activity of issue.timeline) {
    activity.timestamp = new Date(activity.timestamp)
  }
  return issue
}

export const defaultCommentHtml = `
  <strong>Steps</strong>
  <br>
  <ol>
    <li>I added the Goalco supersuit to my cart</li>
    <li>I entered in the credit card details for my American Express card</li>
    <li>I clicked the checkout button</li>
  </ol>

  <strong>Observations</strong>
  <br>
  <p>The spinner kept spinning endlessly</p>

  <strong>Expectations</strong>
  <br>
  <p>The order should have went through and I should have received a confirmation email</p>
`

function randomId(site: string) {
  const keys = Object.keys(localStorage)
  const idSpace = Math.max(1000, keys.length * 2)
  while (true) {
    const id = 1 + Math.floor(idSpace * Math.random())
    const key = demoIssuesLocalStorageKey(site, id)
    if (!localStorage.getItem(key)) {
      return id
    }
  }
}

function createIssue(opts: Partial<IssuePostBody> = {}): Issue {
  const site = opts.site || defaultSite
  const id = opts.id || randomId(site)
  const user = opts.user || { username: 'sillywalks', avatarUrl: 'https://github.com/will-weiss.png?size=71' }
  const title = opts.title || "Checkout isn't working"

  const commentHtml = opts.initialCommentHtml || defaultCommentHtml

  const now = new Date()

  return {
    id,
    title,
    site,
    status: 'Opened',
    initialReport: {
      by: user,
      timestamp: now,
    },
    aggregates: {
      upvotes: { count: 1 },
      comments: { count: 1 },
    },
    timeline: [
      {
        verb: 'change status',
        by: user,
        timestamp: now,
        status: 'Opened',
      },
      {
        verb: 'comment',
        by: user,
        timestamp: now,
        comment: { html: commentHtml }
      }
    ]
  }
}

function getInLocalStorage(site: string, id: number): null | Issue {
  const issueJson = localStorage.getItem(demoIssuesLocalStorageKey(site, id))
  return issueJson ? issueFromJson(issueJson) : null
}

function setInLocalStorage(issue: Issue): Issue {
  localStorage.setItem(
    demoIssuesLocalStorageKey(issue.site, issue.id),
    JSON.stringify(issue)
  )
  return issue
}

export async function postIssue(issuePostBody: IssuePostBody): Promise<Issue> {
  return setInLocalStorage(createIssue(issuePostBody))
}

export async function getIssueBySiteAndId(site: string, id: number): Promise<null | Issue> {
  try {
    return getInLocalStorage(site, id) || createIssue({ id, site })
  } catch (err) {
    return null
  }
}

export async function postComment(
  { site, id, user, comment }: {
    site: string
    id: number
    user: User
    comment: { html: string }
  }
): Promise<any> {
  const issue = (await getIssueBySiteAndId(site, id))!

  const nextTimeline: IssueTimeline = issue.timeline.concat([{
    verb: 'comment',
    by: user,
    timestamp: new Date(),
    comment
  }])

  const nextIssue: Issue = {
    ...issue,
    aggregates: {
      ...issue.aggregates,
      comments: {
        count: issue.aggregates.comments.count + 1,
      }
    },
    timeline: nextTimeline
  }

  return setInLocalStorage(nextIssue)
}

export async function changeStatus(
  { site, id, user, status, comment }: {
    site: string
    id: number
    user: User
    status: IssueStatus
    comment: { html: string }
  }
): Promise<any> {
  const issue = (await getIssueBySiteAndId(site, id))!

  const now = new Date()

  const nextTimeline: IssueTimeline = issue.timeline.concat([
    {
      verb: 'comment',
      by: user,
      timestamp: now,
      comment
    },
    {
      verb: 'change status',
      by: user, // TODO: store user state somewhere?
      timestamp: now,
      status
    },
  ])

  const nextIssue: Issue = {
    ...issue,
    status,
    timeline: nextTimeline
  }

  return setInLocalStorage(nextIssue)
}

export async function searchIssues(title: string): Promise<Issue[]> {
  const search = new RegExp(title, 'i')
  const matches: Issue[] = []
  Object.keys(localStorage).forEach(key => {
    if (key.startsWith(localStorageKeyPrefix)) {
      const issue = issueFromJson(localStorage.getItem(key)!)
      if (search.test(issue.title)) {
        matches.push(issue)
      }
    }
  })
  return matches
}

function setDefaultIssues() {
  if (typeof window === 'undefined') return

  if (!getInLocalStorage(defaultSite, 505)) {
    setInLocalStorage(createIssue({
      id: 505,
      title: 'Your checkout is having major problems',
      user: { username: 'dadbod22' },
      initialCommentHtml: '<div>What gives?</div>'
    }))
  }

  if (!getInLocalStorage(defaultSite, 505)) {
    setInLocalStorage(createIssue({
      id: 510,
      title: "I can't put my credit card on checkout",
      user: { username: 'mickjagger' },
      initialCommentHtml: '<div>What gives?</div>'
    }))
  }
}

setDefaultIssues()
