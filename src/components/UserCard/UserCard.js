import React, { useState } from "react";
import "./UserCard.css";

function UserCard({ picture, name, email }) {
  const [likes, setLikes] = useState(0);
  const [showEmail, setShowEmail] = useState(false);
  const [liked, setLiked] = useState(false);

  function toggleLike()
  {
    if(!liked)
        setLikes(likes + 1);
    else
        setLikes(likes - 1);
    setLiked(!liked);
  }

  return (
    <div className="user-card">
        <div className="avatar_border"><img src={picture} alt={name} className="avatar" /></div>
        <h3>{name}</h3>
        {showEmail && <p className="email">{email}</p>}
        <div className="buttons">
            <button onClick={() => toggleLike()}>
                {liked? <img alt="like icon" className="pop" width="25px" src="/heartFilled.png"/> : 
                <img alt="like icon" width="25px" src="/heart.png"/>}
            {likes}</button>
            <button onClick={() => setShowEmail(!showEmail)}>
            {showEmail ? "Hide Email" : "Show Email"}
        </button>
      </div>
    </div>
  );
}

export default UserCard;
