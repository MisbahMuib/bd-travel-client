import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
	const {
		signInUsingGoogle,
		handleEmailChange,
		handlePasswordChange,
		handleRegistration,
	} = useAuth();
	const location = useLocation();
	const history = useHistory();
	const redirect_uri = location.state?.from || "/home";

	const handleGoogleLogin = () => {
		signInUsingGoogle().then((result) => {
			history.push(redirect_uri);
		});
	};

	return (
		<div>
			<>
				<Container>
					<h1 className="shadow-sm text-secondary mt-5 p-3 text-center rounded">
						Please Login
					</h1>
					<Row className="mt-5">
						<Col
							lg={5}
							md={6}
							sm={12}
							className="p-5 m-auto shadow-sm rounded-lg"
						>
							<Form>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Control
										onBlur={handleEmailChange}
										type="email"
										placeholder="Enter email"
										required
									/>
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Control
										onBlur={handlePasswordChange}
										type="password"
										placeholder="Password"
										required
									/>
								</Form.Group>
								<Button onClick={handleRegistration} variant="secondary w-100">
									Sign In
								</Button>
							</Form>
						</Col>
					</Row>
					<div>
						<h5 className="m-3">Or login with</h5>
						<button onClick={handleGoogleLogin} className="btn btn-warning">
							Google Sign In
						</button>
					</div>
					<p className="text-center mt-2">
						Don't have an account?
						<span className="text-warning" style={{ cursor: "pointer" }}>
							<u>Create an Account</u>
						</span>
					</p>
				</Container>
			</>
		</div>
	);
};

export default Login;
