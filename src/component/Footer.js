import React from 'react';
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
	return (
		<div className="fixed-bottom bg-info">
			<Navbar color="dark">
				<Container>
					<NavbarBrand>Ahmed Merehil</NavbarBrand>
					<a
						className="footer-link text-white"
						href="https://github.com/AightA"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon
							className="mr-2"
							aria-hidden="true"
							icon={faGithub}
						/>
						Github
					</a>
					<a
						className="footer-link text-white"
						href="https://www.linkedin.com/in/ahmed8merehil/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon
							className="mr-2"
							aria-hidden="true"
							icon={faLinkedin}
						/>
						Ahmed
					</a>
					&copy;{new Date().getFullYear()}
				</Container>
			</Navbar>
		</div>
	);
}
