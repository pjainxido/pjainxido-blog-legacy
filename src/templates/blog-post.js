import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./blog-post.css"

import Comment from "./comment"
import Sidebar from "../components/sidebar/Sidebar"
import TechTag from "../components/tags/TechTag"
import CustomShareBlock from "../components/CustomShareBlock"

const BlogPost = props => {
  const post = props.data.markdownRemark
  const labels = props.data.site.siteMetadata.labels
  const siteName = props.data.site.siteMetadata.title
  const siteUrl = props.data.site.siteMetadata.url
  const url = `${siteUrl}${props.pageContext.slug}`
  const tags = post.frontmatter.tags

  const getTechTags = tags => {
    return tags.map((tag, i) => <TechTag key={i} tag={tag} />)
  }

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className="post-page-main">
        <div className="sidebar px-4 py-2">
          <Sidebar />
        </div>

        <div className="post-main">
          <SEO title={post.frontmatter.title} />
          <div className="mt-3">
            <h2 className="heading">{post.frontmatter.title}</h2>
            <div className="d-block">{getTechTags(tags)}</div>
            <br />
            <small>
              <i>Published on </i> {post.frontmatter.date}
            </small>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <Comment repo="pjainxido/pjainxido.github.io" />
            <CustomShareBlock
              title={post.frontmatter.title}
              siteName={siteName}
              url={url}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        url
        title
        labels {
          tag
          tech
          name
          size
          color
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`

export default BlogPost
