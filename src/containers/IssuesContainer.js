import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import IssueLogs from "../components/issues/IssueLogs";
import AddBtn from "../components/layout/AddBtn";
import AddServiceModal from "../components/services/AddServiceModal";
import EditServiceModal from "../components/services/EditServiceModal";
import AddUserModal from "../components/users/AddUserModal";
import UserListModal from "../components/users/UserListModal";

const IssuesContainer = () => {
	useEffect(() => {
		// Init Materialize JS
		M.AutoInit();
	});
	return (
		<div>
			<IssueLogs />
			{/* <AddBtn />
			<AddServiceModal />
			<EditServiceModal />
			<AddUserModal />
			<UserListModal /> */}
		</div>
	);
};

export default IssuesContainer;
