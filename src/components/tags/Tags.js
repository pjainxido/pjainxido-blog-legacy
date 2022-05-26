import React from "react"
import TechTag from "./TechTag"

const Tags = ({ tags }) => {
  return tags.map((tag, i) => <TechTag key={i} tag={tag} />)
}

export default Tags
