import React, { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";

import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import "./Booking";

const Booking = () => {
	const { serviceId } = useParams();
	const [service, setService] = useState({});
	const { user } = useAuth();

	useEffect(() => {
		fetch(`http://localhost:5000/services/${serviceId}`)
			.then((res) => res.json())
			.then((data) => setService(data));
	}, []);

	return (
		<div className="add-service">
			<div className="add-service">
				<h2>Booking Information</h2>
				<form>
					<input placeholder={user?.displayName} />
					<input placeholder={user?.email} />
					<input type="text" placeholder="Address" />

					<h4 className="text-dark">Journey date:</h4>
					<input className="w-35%" type="date" id="book" />

					<button className="btn btn-dark mb-5">Book now</button>
				</form>
			</div>
			<div>
				<Card className="bg-dark text-white">
					<Card.Img
						src={service.img}
						height="500px"
						width="500px"
						alt="Card image"
					/>
					<Card.ImgOverlay>
						<Card.Title>
							{" "}
							<h2 className="text-primary">{service.name}</h2>{" "}
						</Card.Title>
						<Card.Text>{service.description}</Card.Text>
						<Card.Text>Last updated 3 mins ago</Card.Text>
					</Card.ImgOverlay>
				</Card>
			</div>
		</div>
	);
};

export default Booking;
