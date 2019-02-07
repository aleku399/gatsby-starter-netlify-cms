import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div>
    <Link className="sluglink" to={post.fields.slug}>
      {post.frontmatter.title} 
    </Link>
  </div>
)

export default PostLink
