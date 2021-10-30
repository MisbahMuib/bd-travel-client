import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Contexts/AuthProvider";
import Booking from "./Pages/Booking/Booking/Booking";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import NotFound from "./Pages/NotFound/NotFound";
import Header from "./Pages/Shared/Header/Header";
import Contact from "./Pages/Login/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import AddServices from "./Pages/AddServices/AddServices";
import ManageService from "./Pages/ManageService/ManageService";
import SignUp from "./Pages/Login/SignUp/SignUp";


function App() {
	return (
		<div className="App">
			<AuthProvider>
				<Router>
					<Header></Header>
					<Switch>
						<Route exact path="/">
							<Home> </Home>
						</Route>
						<Route path="/home">
							<Home> </Home>
						</Route>
						<Route path="/login">
							<Login></Login>
						</Route>

						<PrivateRoute path="/contact">
							<Contact> </Contact>
						</PrivateRoute>
						<PrivateRoute path="/booking/:serviceId">
							<Booking></Booking>
						</PrivateRoute>
						<PrivateRoute path="/addServices">
							<AddServices></AddServices>
						</PrivateRoute>
						<PrivateRoute path="/manageServices">
							<ManageService> </ManageService>
						</PrivateRoute>
						<Route path="/signUp">
							<SignUp> </SignUp>
						</Route>

						<Route path="*">
							<NotFound></NotFound>
						</Route>
					</Switch>
					<Footer></Footer>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
