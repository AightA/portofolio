import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<Navbar expand="lg" bg="info">
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link as={Link} to="/" className="mr-5">
						Home
					</Nav.Link>
					<Nav.Link as={Link} to="/about" className="mr-5">
						About
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
