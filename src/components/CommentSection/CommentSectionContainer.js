// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const { comments } = props

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map(commentObject => {
      console.log("commentObject", commentObject)
        return (
          <Comment key={commentObject.username} comment={commentObject}/>
        )
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
