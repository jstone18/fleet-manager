import React, { Fragment, useEffect } from "react";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import ServiceLogs from "./components/logs/ServiceLogs";
import AddBtn from "./components/layout/AddBtn";
import AddServiceModal from "./components/logs/AddServiceModal";

const App = () => {
	useEffect(() => {
		// Init Materialize JS
		M.AutoInit();
	});
	return (
		<Fragment>
			<Navbar />
			<div className="container">
				<AddBtn />
				<AddServiceModal />
				<ServiceLogs />
			</div>
		</Fragment>
	);
};

export default App;
