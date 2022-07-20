import React from "react"
import { FaGithubSquare } from "react-icons/fa"

const Links = ({ contacts }) => {
  return (
    <div className="left-links float-right">
      <a className="text-light" href={contacts.github}>
        <span title="GitHub">
          <FaGithubSquare size={40} style={{ color: "light" }} />
        </span>
      </a>
    </div>
  )
}

export default Links
