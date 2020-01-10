/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<nav style={{ marginBottom: "30px" }} className="blue">
				<div className="nav-wrapper">
					<a href="#" data-target="mobile-demo" className="sidenav-trigger">
						<i className="material-icons">menu</i>
					</a>
					<ul className="left hide-on-med-and-down">
						<li>
							<Link to="/">
								Home
								<i className="material-icons left">home</i>
							</Link>
						</li>
						{/* <li>
							<Link to="/users">
								User
								<i className="material-icons left">person</i>
							</Link>
						</li> */}
						<li>
							<Link to="vehicles">
								Vehicles
								<i className="material-icons left">airport_shuttle</i>
							</Link>
						</li>
						<li>
							<Link to="/services">
								<i className="material-icons left">build</i>
								Services
							</Link>
						</li>
						<li>
							<Link to="/issues">
								<i className="material-icons left">report_problem</i>
								Issues
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
