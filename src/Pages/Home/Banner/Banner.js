import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import banner1 from "../../../images/banner/banner1.jpg";
import banner2 from "../../../images/banner/banner2.jpg";
import banner3 from "../../../images/banner/banner3.jpg";
import banner4 from "../../../images/banner/banner4.jpg";
import banner5 from "../../../images/banner/banner5.jpg";
import "./Banner";

const Banner = () => {
	return (
		<>
			<Carousel interval={600}>
				<Carousel.Item>
					<img
						className="d-block  w-100 banner"
						src={banner1}
						height="600px"
						alt="First slide"
					/>
					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className="d-block  w-100 banner"
						src={banner2}
						height="600px"
						alt="Second slide"
					/>

					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block  w-100 banner"
						src={banner3}
						height="600px"
						alt="Second slide"
					/>

					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block  w-100 banner"
						src={banner4}
						height="600px"
						alt="Second slide"
					/>

					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block  w-100 banner"
						src={banner5}
						height="600px"
						alt="Second slide"
					/>

					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</>
	);
};

export default Banner;
