import littlelemon_logo_large from "../images/littlelemon_logo_large.png";

export default function Nav() {
  return (
    <nav>
      <img src={littlelemon_logo_large} alt="Little Lemon large logo"></img>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/reservations">Reservations</a>
        </li>
        <li>
          <a href="/order">Order Online</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
}
