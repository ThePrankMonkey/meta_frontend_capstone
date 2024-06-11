import { Routes, Route } from "react-router-dom";

import Home from './Home'
import About  from './About'
import Menu  from './Menu'
import Reservations from './Reservations'
import Order from './Order'
import Login from './Login'

export default function Main() {
  return <main>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/menu" element={<Menu/>}></Route>
      <Route path="/reservations" element={<Reservations/>}></Route>
      <Route path="/order" element={<Order/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
  </main>;
}
