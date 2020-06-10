// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

// import dummyData from '../../dummy-data'

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  const { postData } = props

  const [likes, setlikes] = useState(props)
  console.log(likes.postData.username)
  return (
    <div className="post-border">
      <PostHeader
        username={likes.postData.username}
        thumbnailUrl={
          likes.postData.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={likes.postData.imageUrl}
        />
      </div>
      <LikeSection />
      <CommentSection
        postId={likes.postData.imageUrl}
        comments={likes.postData.comments}
      />
    </div>
  );
};

export default Post;
