import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { ArrowForward } from '@material-ui/icons'
import { ButtonBase } from '@material-ui/core'
import Layout from '../components/layout'
import Hero from '../components/hero'
import SEO from '../components/seo'
import { JoinCardContents } from '../components/join-card'
import Manifesto from '../components/manifesto'


export default function IndexPage({ data }: { data: any }): JSX.Element {

  const joinCardContentsRef: React.MutableRefObject<HTMLDivElement> = React.useRef() as any
  const headerRef: React.MutableRefObject<HTMLDivElement> = React.useRef() as any
  const heroRef: React.MutableRefObject<HTMLDivElement> = React.useRef() as any
  const logoRef: React.MutableRefObject<SVGSVGElement> = React.useRef() as any

  const [logoDistanceFromHeroBottom, setLogoDistanceFromHeroBottom] = React.useState(Infinity)
  const [logoFade, setLogoFade] = React.useState(0)

  React.useEffect(() => {
    function onScroll() {
      setLogoDistanceFromHeroBottom(
        heroRef.current.getBoundingClientRect().bottom -
        logoRef.current.getBoundingClientRect().bottom
      )
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  })

  React.useEffect(() => {
    if (!headerRef) return setLogoFade(0)
    const headerIsFixed = window.getComputedStyle(headerRef.current!).position === 'fixed'
    if (!headerIsFixed) return setLogoFade(0)
    if (logoDistanceFromHeroBottom > 100) return setLogoFade(0)
    const nextLogoFade = (100 - Math.max(0, logoDistanceFromHeroBottom)) / 100
    setLogoFade(nextLogoFade)
  }, [headerRef, logoDistanceFromHeroBottom])

  return (
    <Layout
      mainClassName="index"
      headerRef={headerRef}
      logoRef={logoRef}
      logoFade={logoFade}
      // Use CSS to hide apply-link on mobile
      headerLinks={
        <ButtonBase className="apply-link" component={Link} to="/apply">
          Apply to join &nbsp;&nbsp;<ArrowForward/>
        </ButtonBase>
      }
    >
      <SEO />
      <Hero additionalClassNames="index" heroRef={heroRef}>
        <h1 className="white">The internet's helpdesk</h1>
        <h2 className="white">Join us in our quest to make the web more transparent and better aligned with the interests of all people.</h2>
      </Hero>
      <div className="posthero">
        <h1>What we're building</h1>
        <div className="designs">
          <div className="design">
            <div className="explanation">
              <h2>A widget to <br/>post issues</h2>
              People can report issues they encounter online
            </div>
            <img src="/widget-open.png" />
          </div>
          <div className="design">
            <div className="explanation">
              <h2>A timeline to <br/>discuss issues</h2>
              People can have conversations with maintainers
            </div>
            <img src="/issue-detail.png" />
          </div>
          <div className="design">
            <div className="explanation">
              <h2>A taskboard to <br/>track issues</h2>
              Maintainers may track progress and sort issues by how many people are experiencing them
            </div>
            <img src="/taskboard.png" />
          </div>
        </div>
        <h1>Why we're building this</h1>
        <div className="manifesto">
          <div className="manifesto-item manifesto-contents">
            <Manifesto />
          </div>
          <div className="manifesto-item manifesto-signature">
            <div className="signature-texts">
              <img alt="Will Weiss signature" className="signature" src="signature.png"/>
              <p>Will Weiss</p>
            </div>
            <div className="spacer"></div>
            <a href="https://github.com/will-weiss">
              <Img alt="Will Weiss portrait" className="avatar" fixed={data.willAvatar.childImageSharp.fixed} />
            </a>
          </div>
        </div>
        {/* The join card is only shown on mobile */}
        <JoinCardContents ref={joinCardContentsRef} />
      </div>

    </Layout>
  )
}

export const query = graphql`
  query {
    willAvatar: file(relativePath: { eq: "will-weiss.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 55, height: 55, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`