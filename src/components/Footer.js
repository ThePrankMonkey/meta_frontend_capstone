import { Link } from "react-router-dom";
import littlelemon_logo_small from "../images/littlelemon_logo_small.png";

export default function Footer() {
  return (
    <footer>
      <article>
        <section>
          <img src={littlelemon_logo_small} alt="Little Lemon small logo" />
        </section>
        <section>
          <h3>Document Navigation</h3>
          <ul>
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
        </section>
        <section>
          <h3>Contact</h3>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </section>
        <section>
          <h3>Social Media Links</h3>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </section>
      </article>
    </footer>
  );
}
