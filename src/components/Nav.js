import { Outlet, Link } from "react-router-dom";
import littlelemon_logo_large from "../images/littlelemon_logo_large.png";

export default function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <img src={littlelemon_logo_large} alt="Little Lemon large logo"></img>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/order">Order Online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
