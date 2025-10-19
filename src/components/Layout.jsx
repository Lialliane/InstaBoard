import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

export default function Layout() {
  return (
    <>
      <Navigation />
      <main style={{ padding: "20px" , minHeight: "80vh", margin: "0" }}>
        <Outlet />
      </main>
      <footer style={{ textAlign: "center", padding: "1rem" , color: "white"}}>
        © Lujain Alkhatib InstaBoard 2025
      </footer>
    </>
  );
}
