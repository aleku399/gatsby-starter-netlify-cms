import React from "react";

export default ({ comment }) => {
  return (
    <div className="comment">
      <img className="comment__avatar" src={comment.avatar} />
      <div className="comment__wrapper">
        <h3 className="comment__name">{comment.name}</h3>
        <p className="comment__date">{comment.date}</p>
        <div
          className="comment__body"
          dangerouslySetInnerHTML={{ __html: comment.html }}
        />
      </div>
    </div>
  );
};

// export const query = graphql`
//   fragment CommentFragment on MarkdownRemark {
//     id
//     html
//     frontmatter {
//       name
//       email
//       date(formatString: "MMMM DD, YYYY")
//     }
//   }
// `;
