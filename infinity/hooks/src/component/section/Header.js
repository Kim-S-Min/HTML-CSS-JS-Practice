import React from "react"
import { Link } from "react-router-dom"
import "./Header.css"

export default function Header() {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to="/">SHADE</Link>
            </div>
            <ul className="navber_menu">
                <li><input type="text"></input></li>
                <li><Link className="navber__login" to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}

{/* <body>
  <nav class="navbar">
    <div class="navbar_logo">
        <a herf="">SHADE</a>
    </div>
    <ul class="navbar_menu">
      <li><input class="navbar_search" type="text"></li>
      <li><a class="navbar_login" href="">Login</a></li>
    </ul>
  </nav>
</body> */}