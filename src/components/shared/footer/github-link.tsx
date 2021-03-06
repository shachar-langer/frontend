import * as React from 'react'

function GithubIcon({ hover }: { hover: boolean }): JSX.Element {
  return (
    <svg width="48px" height="48px" viewBox="0 0 48 48">
      <path
        d="M23.928.15C11 .15.514 10.638.514 23.566c0 10.343 6.75 19.105 15.945 22.265 1.148.144 1.58-.574 1.58-1.15v-4.02c-6.465 1.436-7.902-3.16-7.902-3.16-1.005-2.73-2.586-3.45-2.586-3.45-2.154-1.435.144-1.435.144-1.435 2.298.144 3.59 2.442 3.59 2.442 2.156 3.59 5.46 2.586 6.753 2.01.142-1.58.86-2.585 1.435-3.16-5.17-.574-10.63-2.585-10.63-11.635 0-2.585.862-4.596 2.442-6.32-.287-.575-1.005-3.017.288-6.177 0 0 2.01-.574 6.464 2.442 1.866-.574 3.877-.718 5.888-.718 2.01 0 4.022.286 5.89.717 4.453-3.016 6.464-2.442 6.464-2.442 1.293 3.16.43 5.602.287 6.177a9.29 9.29 0 012.44 6.32c0 9.05-5.458 10.918-10.63 11.492.863.718 1.58 2.155 1.58 4.31v6.464c0 .574.432 1.292 1.58 1.15 9.338-3.16 15.946-11.924 15.946-22.266C47.339 10.637 36.852.152 23.924.152l.004-.002z"
        fill={hover ? '#161616' : '#979797'}
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </svg>
  )
}

export default function GithubLink(): JSX.Element {
  const [hover, setHover] = React.useState(false)

  return (
    <a
      className="footer-link"
      href="https://github.com/morehumaninternet/frontend"
      aria-label="Github"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <GithubIcon hover={hover} />
    </a>
  )
}
