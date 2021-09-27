import React from "react"
import { FaGithubSquare } from "react-icons/fa"

import "../layout.css"

const MobileSocialLinks = ({ contacts }) => {
  return (
    <div className="bottom-bar py-1">
      <a className="text-light" href={contacts.github}>
        <span title="GitHub">
          <FaGithubSquare size={26} style={{ color: "light" }} />
        </span>
      </a>
    </div>
  )
}

export default MobileSocialLinks
