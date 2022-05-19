import React from "react"
import { Link } from "gatsby"

const MobilePages = () => {
  return (
    <div className="mobile-pages-main">
      <div className="text-center">
        <p className="d-inline p-4">
          <Link to="/projects">
            <span className='link-white' >Projects</span>
          </Link>
        </p>
        <p className="d-inline p-4">
          <Link to="/about">
            <span className='link-white'>About</span>
          </Link>
        </p>
        <p className="d-inline p-4">
          <Link to="/archive">
            <span className='link-white'>Archive</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default MobilePages
