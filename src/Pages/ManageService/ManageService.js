import React, { useEffect, useState } from "react";
import "./ManageService";

const ManageService = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/services")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	//delete an user
	const handleDeleteService = (id) => {
		const proceed = window.confirm("Are you sure,You want to delete?");
		if (proceed) {
			const url = `http://localhost:5000/services/${id}`;
			fetch(url, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deletedCount > 0) {
						alert("Deleted Successfully");
						const remainingServices = services.filter(
							(Service) => Service._id !== id
						);
						setServices(remainingServices);
					}
				});
		}
	};

	return (
		<div className="manageService-container ">
			<h2>Manage service</h2>
			<h2>Available Services : {services.length}</h2>
			{services.map((Service) => (
				<div key={Service._id}>
					<h3>{Service.name}</h3>
					<button>Update</button>
					<button onClick={() => handleDeleteService(Service._id)}>
						Delete
					</button>
				</div>
			))}
		</div>
	);
};

export default ManageService;
