import React, { useEffect } from "react";
import { connect } from "react-redux";
import ServiceItem from "./ServiceItem";
import Preloader from "../layout/Preloader";
import { getServices } from "../../redux/actions/serviceActions";
import PropTypes from "prop-types";

const ServiceLogs = ({ service: { services, loading }, getServices }) => {
	useEffect(() => {
		getServices();
		// eslint-disable-next-line
	}, []);

	if (loading || services === null) {
		return <Preloader />;
	}

	return (
		<ul className="collection with-header">
			<li className="collection-header">
				<h4 className="center">Services Log</h4>
			</li>
			{!loading && services.length === 0 ? (
				<p className="center">No services to show...</p>
			) : (
				services.map(service => (
					<ServiceItem key={service.id} service={service} />
				))
			)}
		</ul>
	);
};

ServiceLogs.propTypes = {
	service: PropTypes.object.isRequired,
	getServices: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	service: state.service
});

export default connect(mapStateToProps, { getServices })(ServiceLogs);
