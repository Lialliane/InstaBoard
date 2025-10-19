import { useLocation, useNavigate } from "react-router-dom";
import "./TeamDetails.css";

export default function TeamDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  if (!user) return <p>No user data found!</p>;

  return (
    <div className="team-details">
      <div className="avatar_border"><img src={user.picture.large} alt={user.name.first} className="avatar" /></div>
      {/* <img src={user.picture.large} alt={user.name.first} /> */}
      <div className="user_info">
        <h2>{user.name.first} {user.name.last}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.location.city}, {user.location.country}</p>
        <button onClick={() => navigate(-1)}>Back to Team</button>
      </div>
    </div>
  );
}
