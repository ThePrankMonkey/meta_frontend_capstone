import { Routes, Route } from "react-router-dom";

import Home from "../routes/Home";
import About from "../routes/About";
import Menu from "../routes/Menu";
import Reservations from "../routes/Reservations";
import Order from "../routes/Order";
import Login from "../routes/Login";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/reservations" element={<Reservations />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </main>
  );
}
