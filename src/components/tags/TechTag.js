import React from "react"

import "./tags.css"
import { Link } from "gatsby"

const TechTag = props => {
  const { tag, tech, name, size, color, count } = props

  return (
    <div className="d-inline-block p-1">
      <Link to={`/tags/${tag}/`}>
        <button className="tech-tag text-white">
          <p className="d-inline">{`# ${tag}`} </p>
        </button>
      </Link>
    </div>
  )
}

export default TechTag
