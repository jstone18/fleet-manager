import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddUserModal = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const onSubmit = () => {
		if (firstName === "" || lastName === "") {
			M.toast({
				html: "Please fill in all information."
			});
		} else {
			console.log(firstName, lastName);
			setFirstName("");
			setLastName("");
		}
	};

	return (
		<div id="add-user-modal" className="modal">
			<div className="modal-content">
				<h4>Enter New User</h4>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="firstName"
							value={firstName}
							onChange={e => setFirstName(e.target.value)}
						/>
						<label htmlFor="firstName" className="active">
							First Name:
						</label>
					</div>
				</div>

				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="lastName"
							value={lastName}
							onChange={e => setLastName(e.target.value)}
						/>
						<label htmlFor="lastName" className="active">
							Last Name:
						</label>
					</div>
				</div>
			</div>
			<div className="modal-footer">
				<button
					href="#!"
					onClick={onSubmit}
					className="modal-close waves-effect blue waves-light btn">
					Enter
				</button>
			</div>
		</div>
	);
};

export default AddUserModal;
