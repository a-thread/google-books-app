import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function NavBar() {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="/">read moar books</Navbar.Brand>
            <Nav activeKey="/search" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                <Nav.Item>
                    <Nav.Link href="/Search">Search</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Saved">Saved</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}

export default NavBar;