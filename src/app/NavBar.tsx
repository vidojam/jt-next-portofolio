"use client";

import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import { usePathname } from "next/navigation";


export default function NavBar() {
  const pathname = usePathname();

  return (
    <Navbar bg="primary" variant="dark" color="black" sticky="top" expand="sm"   collapseOnSelect >
       <Container>
          <Navbar.Brand as={Link} href="/">
               Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav>
              <Nav.Link as={Link} href="/" active={ pathname === "/Projects" }>Home</Nav.Link>
              <Nav.Link as={Link} href="/Projects" active={ pathname === "/Projects" }>Projects</Nav.Link>
              <Nav.Link as={Link} href="/Certificates" active={ pathname === "/Certificates" }>Certificates</Nav.Link>
              <Nav.Link as={Link} href="/Resume" active={ pathname === "/Resume" }>Resume</Nav.Link>
              <Nav.Link as={Link} href="/Contact" active={ pathname === "/Contact" }>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
       </Container>
    </Navbar>
  );
}