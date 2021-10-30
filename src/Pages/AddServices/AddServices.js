import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./AddServices.css";

const AddService = () => {
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		console.log(data);

		axios.post("http://localhost:5000/services", data).then((res) => {
			if (res.data.insertId) {
				alert("Added Successfully!!");
				reset();
			}
		});
	};
	return (
		<div className="add-service">
			<h2>Please Add a Service</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register("name", { required: true, maxLength: 20 })}
					placeholder="Input Name"
				/>
				<textarea {...register("description")} placeholder="Description" />
				<input type="number" {...register("price")} placeholder="Input Price" />
				<input {...register("img")} placeholder="Img URL" />
				<input type="submit" />
			</form>
		</div>
	);
};

export default AddService;
