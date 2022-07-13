import React from "react"
import { Link } from "gatsby"
import { FaGithubSquare, FaHome } from "react-icons/fa"

const Links = ({ contacts }) => {
  return (
    <div className="left-links float-right">
      <a className="text-light">
        <Link to="/">
          <span className="d-block py-1 link-dark" title="Home">
            <FaHome size={40} style={{ color: '#fff' }} />
          </span>
        </Link>
      </a>
      <a className="text-light" href={contacts.github}>
        <span title="GitHub">
          <FaGithubSquare size={40} style={{ color: "light" }} />
        </span>
      </a>
    </div>
  )
}

export default Links
