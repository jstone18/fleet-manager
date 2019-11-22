/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteService, setCurrent } from "../../redux/actions/serviceActions";
import M from "materialize-css/dist/js/materialize.min.js";

const ServiceItem = ({ service, deleteService, setCurrent }) => {
	const onDelete = () => {
		deleteService(service.id);
		M.toast({ html: "Service Deleted." });
	};

	return (
		<li className="collection-item">
			<div>
				<a
					href="#edit-service-modal"
					className={`modal-trigger ${
						service.attention ? "red-text" : "blue-text"
					}`}
					onClick={() => setCurrent(service)}>
					{service.vehicle}
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
				<a href="" onClick={onDelete} className="secondary-content">
					<i className="material-icons grey-text">delete</i>
				</a>
			</div>
		</li>
	);
};

ServiceItem.propTypes = {
	service: PropTypes.object.isRequired,
	deleteService: PropTypes.func.isRequired,
	setCurrent: PropTypes.func.isRequired
};

export default connect(null, { deleteService, setCurrent })(ServiceItem);
