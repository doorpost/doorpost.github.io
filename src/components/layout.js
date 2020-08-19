import React from "react"
import { Link } from "gatsby"

const Layout = props => {
  const { title, children } = props;
  const [toggleNav, setToggleNav] = React.useState(false);
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
              <li className="nav-home nav-current" role="menuitem">
                <Link to={`/`}>首页</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>关于</Link>
              </li>
              <li className="nav-elements" role="menuitem">
                <Link to={`/elements`}>其他元素示例</Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://www.instagram.com/realzhangcheng"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://github.com/doorpost"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
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
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link><br/>
        Built with{" "}
        <a
          href="https://gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
        {" & "}
        <a
            href="https://flotiq.com"
            target="_blank"
            rel="noopener noreferrer"
        >
          Flotiq
        </a>
      
      <footer className="site-foot-right">
            <img src="https://api.netlify.com/api/v1/badges/8104be56-a5dc-4714-a960-7444ebec8717/deploy-status.svg"  alt="status" />
      </footer>
    </div>
  )
};

export default Layout
