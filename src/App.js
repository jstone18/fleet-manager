import React, { Fragment, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import ServiceLogs from "./components/logs/ServiceLogs";
import AddBtn from "./components/layout/AddBtn";
import AddServiceModal from "./components/logs/AddServiceModal";
import EditServiceModal from "./components/logs/EditServiceModal";
import AddUserModal from "./components/users/AddUserModal";
import UserListModal from "./components/users/UserListModal";

const App = () => {
	useEffect(() => {
		// Init Materialize JS
		M.AutoInit();
	});
	return (
		<Provider store={store}>
			<Fragment>
				<Navbar />
				<div className="container">
					<AddBtn />
					<AddServiceModal />
					<EditServiceModal />
					<ServiceLogs />
					<AddUserModal />
					<UserListModal />
				</div>
			</Fragment>
		</Provider>
	);
};

export default App;
