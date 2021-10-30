import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
	// const {Service}=props;
	const { _id, name, price, description, img } = service;
	return (
		<div className="service pb-3">
			<img src={img} alt="" />
			<h2 className="mt-3">{name}</h2>
			<h3 className="mt-5">Package: {price} BDT</h3>
			<p className="px-3">{description}</p>
			<Link to={`/booking/${_id}`}>
				<button className="btn btn-warning">Book Now</button>
				{/* {name.toLowerCase()} */}
			</Link>
		</div>
	);
};

export default Service;
