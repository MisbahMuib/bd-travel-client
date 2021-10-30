import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
	const { user, logOut } = useAuth();
	return (
		<>
			<Navbar
				collapseOnSelect
				expand="lg"
				bg="dark"
				variant="dark"
				sticky="top"
			>
				<Container>
					<Navbar.Brand href="#home">
						<h4>
							BD <strong className="text-warning">TRAVEL</strong>
						</h4>
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<Nav.Link as={HashLink} to="/home#home">
							Home
						</Nav.Link>
						<Nav.Link as={HashLink} to="/home#services">
							Services
						</Nav.Link>

						<Nav.Link as={HashLink} to="/contact">
							Contact
						</Nav.Link>
						<Nav.Link as={HashLink} to="/addServices">
							Add Services
						</Nav.Link>
						<Nav.Link as={HashLink} to="/manageServices">
							Manage Services
						</Nav.Link>
						<Nav.Link as={HashLink} to="/signUp">
							Sign Up
						</Nav.Link>

						{user?.email ? (
							<Button onClick={logOut} variant="light">
								Logout
							</Button>
						) : (
							<Nav.Link href="/login">Login</Nav.Link>
						)}
						<Navbar.Text>
							Signed in as: <a href="#login"> {user?.displayName} </a>
						</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
