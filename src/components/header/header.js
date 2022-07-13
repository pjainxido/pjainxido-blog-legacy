import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Links from "./Links"
import "./header.css"

const Header = ({ siteTitle, tagline, author, contacts }) => {
  return (
    <header
      className="head-main"
      style={{
        backgroundColor: "#F4D03F",
        backgroundImage:
          "linear-gradient(170deg, rgb(244, 208, 63) 0%, rgb(22, 160, 133) 100%)",
      }}
    >
      <div
        className="head-elements"
        style={{
          margin: `0`,
          padding: `.75rem`,
        }}
      >
        <h1 className="head-logo ml-4" style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <Links contacts={contacts} />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
