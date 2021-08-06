import React from 'react'
import { Container, Nav, NavItem } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'


const AppNavBar = ({ children }) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">XYZ Todos</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavItem>
                            <Link className="nav-link" to="/home">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/login">Login</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/summery">Summery</Link>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
            {children}
        </div>
    )
}

export default AppNavBar