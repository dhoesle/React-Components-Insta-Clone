// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'

const LikeSection = props => {
  const { likes } = props
  // const [newlikes, setLikes] = useState(likes)
  // console.log("newlikes", newlikes)

  const [addedLikes, setAddedLikes] = useState(0)
  const likePost = evt => {
    setAddedLikes(addedLikes + 1)
  }
  console.log("likes", props.likes + addedLikes)

  return (
    <div>
      <div
        className="like-section"
        key="likes-icons-container"
      >
        <div className="like-section-wrapper">
          <FontAwesomeIcon onClick={likePost} icon={faHeart} />
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className="like-number">{likes + addedLikes} likes</p>
    </div>
  )
};

export default LikeSection;
