import React from "react"
import {Navbar, Nav, NavDropdown} from "react-bootstrap"

import "../css/Header.css"


export default function Header() {

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="wrapper">
    <Navbar.Brand href="/">SHADE</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/list">추천목록</Nav.Link>
          Signed in as:<Nav.Link href="/">추천</Nav.Link>
          <Nav.Link href="/login">로그인</Nav.Link>
          Signed in as: <NavDropdown title="{username}" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">마이페이지</NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            <NavDropdown.Item href="#action/3.4">로그아웃</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}


/* <body>
  <nav class="navbar">
    <div class="navbar_logo">
        <a herf="">SHADE</a>
    </div>
    <ul class="navbar_menu">
      <li><input class="navbar_search" type="text"></li>
      <li><a class="navbar_login" href="">Login</a></li>
    </ul>
  </nav>
</body> */