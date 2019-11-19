/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";

const ServiceItem = ({ service }) => {
	return (
		<li className="collection-item">
			<div>
				<a
					href="#edit-service-modal"
					className={`modal-trigger ${
						!service.isComplete ? "red-text" : "blue-text"
					}`}>
					{service.title}
					<br />
					{service.description}
				</a>
				<br />
				<span className="grey-text">
					<span className="black-text">ID # {service.id}</span> last updated by
					{""}
					<span className="black-text"> {service.user}</span> on{" "}
					<Moment format="MMMM Do YYYY, h:mm:ss a">{service.date}</Moment>
				</span>
				<a href="!#" className="secondary-content">
					<i className="material-icons grey-text">delete</i>
				</a>
			</div>
		</li>
	);
};

ServiceItem.propTypes = {
	service: PropTypes.object.isRequired
};

export default ServiceItem;
