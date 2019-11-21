import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const EditServiceModal = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [user, setUser] = useState("");

	const onSubmit = () => {
		if (description === "" || user === "") {
			M.toast({
				html: "Please enter a description and person creating form"
			});
		} else {
			console.log(title, description, user);
			setTitle("");
			setDescription("");
			setUser("");
		}
	};

	return (
		<div id="edit-service-modal" className="modal" style={modalStyle}>
			<div className="modal-content">
				<h4>Edit Service</h4>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="title"
							value={title}
							onChange={e => setTitle(e.target.value)}
						/>
						<label htmlFor="title" className="active">
							Service Title
						</label>
					</div>
				</div>

				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="description"
							value={description}
							onChange={e => setDescription(e.target.value)}
						/>
						<label htmlFor="description" className="active">
							Service Description
						</label>
					</div>
				</div>

				<div className="row">
					<div className="input-field">
						<select
							name="user"
							value={user}
							className="browser-default"
							onChange={e => setUser(e.target.value)}>
							<option value="" disabled>
								Created by:
							</option>
							<option value="Jason Stone">Jason Stone</option>
							<option value="Ken Dermody">Ken Dermody</option>
							<option value="Jon Silvestri">Jon Silvestri</option>
						</select>
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

const modalStyle = {
	width: "75%",
	height: "75%"
};

export default EditServiceModal;
