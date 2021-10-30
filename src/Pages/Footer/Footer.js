import React from "react";
import "./Footer.css";
// import youtube from "../../images/bxl-youtube";
// import fb from '../../Images/bxl-facebook.png';
// import insta from '../../Images/bxl-instagram.png';
// import twitter from '../../Images/bxl-twitter.png';
// import whatsapp from '../../Images/bxl-whatsapp.png';
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="footer-block">
			<div className="row pt-4">
				<div className="col-3">
					<h4>
						BD <strong className="text-warning">TRAVEL</strong>
					</h4>
				</div>
				<div className="col-2">
					<Link className="font-weight-bold" href="/">
						Need Help?
					</Link>
					<br />
					<Link href="/">Help Center</Link>
					<br />
					<Link href="/signup">Email Support</Link>
					<br />
					<Link href="/">Live Chat</Link>
					<br />
					<Link href="/">Gift Certificates</Link>
					<br />
					<Link href="/">Send Us Feedback</Link>
					<br />
				</div>
				<div className="col-2">
					<Link className="font-weight-bold" href="/">
						Digital Resources
					</Link>
					<br />
					<Link href="/">Articles</Link>
					<br />
					<Link href="/">E-books</Link>
					<br />
				</div>
				<div className="col-2">
					<Link className="font-weight-bold" href="/">
						Contact With Us
					</Link>
					<br />
					<Link href="/">
						<img src alt="" />
					</Link>
					<Link href="/">
						<img src alt="" />
					</Link>
					<Link href="/">
						<img src alt="" />
					</Link>
					<Link href="/">
						<img src alt="" />
					</Link>
					<Link href="/">
						<img src alt="" />
					</Link>
					<br />
					<Link href="/">Forum</Link>
					<br />
				</div>
				<div className="col-2">
					<Link className="font-weight-bold" href="/">
						Join Our Newsletter
					</Link>
					<br />
					<p>Get exclusive news,features, and updates from The BD TRAVEL.</p>
				</div>
			</div>
			<p className="text-center text-secondary">
				<small>Copyright © 2021 BD TRAVEL</small>
			</p>
		</div>
	);
};

export default Footer;
