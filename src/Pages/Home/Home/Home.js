import React from "react";

import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import "./Home.css";
const Home = () => {
	return (
		<div className="home-container" id="home">
			<Banner></Banner>
			<Services></Services>
			
		</div>
	);
};

export default Home;
