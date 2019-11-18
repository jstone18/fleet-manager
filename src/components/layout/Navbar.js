/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

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
							<a href="badges.html">
								Home
								<i className="material-icons left">home</i>
							</a>
						</li>
						<li>
							<a href="collapsible.html">
								User
								<i className="material-icons left">person</i>
							</a>
						</li>
						<li>
							<a href="collapsible.html">
								Vehicles
								<i className="material-icons left">airport_shuttle</i>
							</a>
						</li>
						<li>
							<a href="mobile.html">
								<i className="material-icons left">build</i>
								Services
							</a>
						</li>
						<li>
							<a href="mobile.html">
								<i className="material-icons left">report_problem</i>
								Issues
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
