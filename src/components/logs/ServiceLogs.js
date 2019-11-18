import React, { useState, useEffect } from "react";
import ServiceItem from "./ServiceItem";
import Preloader from "../layout/Preloader";

const ServiceLogs = () => {
	const [services, setServices] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getServices();
		// eslint-disable-next-line
	}, []);

	const getServices = async () => {
		setLoading(true);
		const res = await fetch("http://localhost:5000/services");
		// debugger;
		const data = await res.json();
		// debugger;
		setServices(data);
		setLoading(false);
	};

	if (loading) {
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

export default ServiceLogs;
