import React, { useState, useEffect } from "react";
import "../../styles/UserCard.css";
import { Link } from "react-router-dom";

import axios from "axios";
import "./Team.css";

function Team() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=12");
      setUsers((prevUsers) => [...prevUsers, ...response.data.results]);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <div className="card-grid">
        
        {users.map((user, index) => (
          <UserCard
            key={index}
            name={`${user.name.first} ${user.name.last}`}
            email={user.email}
            picture={user.picture.large}
            user={user}
          />
        ))}
      </div>
      <button className="load-btn" onClick={fetchUsers}>
        Load More
      </button>
    </div>
  );
}

function UserCard({ picture, name, email , user }) {
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
        {showEmail && <p style={{color:"white"}} className="email">{email}</p>}
        <div className="buttons">
            <button onClick={() => toggleLike()}>
                {liked? <img alt="like icon" className="pop" width="25px" src="/heartFilled.png"/> : 
                <img alt="like icon" width="25px" src="/heart.png"/>}
            {likes}</button>
            <button onClick={() => setShowEmail(!showEmail)}>
              {showEmail ? "Hide Email" : "Show Email"}
            </button>
      </div>
      <Link to={`/team/${user.login.uuid}`} state={{ user }}>
          View Profile
      </Link>
    </div>
  );
}

export default Team;
