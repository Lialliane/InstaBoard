import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found" style={{ textAlign: "center", color:"white" , fontFamily:"Brush Script MT" }}>
      <h1> 404 - Page Not Found! 🫠</h1>
      <Link style={{fontSize:"1.5rem"}} to="/">Go Back Home</Link>
    </div>
  );
}
