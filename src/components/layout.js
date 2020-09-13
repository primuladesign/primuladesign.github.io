import React from "react"
import { Link } from "gatsby"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" class="site-head-left">
            <ul className="nav" role="menu">
              <li
                className={`nav-home ${
                  typeof window !== "undefined" &&
                  window.location.pathname === "/"
                    ? "nav-current"
                    : ""
                }`}
                role="menuitem"
              >
                <Link to={`/`}>Home</Link>
              </li>
              <li
                className={`nav-home ${
                  typeof window !== "undefined" &&
                  window.location.pathname.includes("about")
                    ? "nav-current"
                    : ""
                }`}
                role="menuitem"
              >
                <Link to={`/about`}>About</Link>
              </li>
              <li
                className={`nav-home ${
                  typeof window !== "undefined" &&
                  window.location.pathname.includes("contact")
                    ? "nav-current"
                    : ""
                }`}
                role="menuitem"
              >
                <Link to={`/contact`}>Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              <div className="site-head-logo-title">PRIMULA</div>
              <div className="site-head-logo-subtitle">
                HORTICULTURE &amp; DESIGN
              </div>
            </Link>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://www.instagram.com/primuladesign.slc/"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link>
      </footer>
    </div>
  )
}

export default Layout
