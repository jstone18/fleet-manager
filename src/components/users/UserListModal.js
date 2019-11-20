import React, { useState, useEffect } from "react";
import UserItem from "./UserItem";

const UserListModal = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getUsers();
		// eslint-disable-next-line
	}, []);

	const getUsers = async () => {
		setLoading(true);
		const res = await fetch("http://localhost:5000/users");
		// debugger;
		const data = await res.json();
		// debugger;
		setUsers(data);
		setLoading(false);
	};

	return (
		<div id="user-list-modal" className="modal">
			<div className="modal-content">
				<h4>User List</h4>
				<ul className="collection">
					{!loading &&
						users.map(user => <UserItem key={user.id} user={user} />)}
				</ul>
			</div>
		</div>
	);
};

export default UserListModal;
