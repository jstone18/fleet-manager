import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addService } from "../../redux/actions/serviceActions";

import M from "materialize-css/dist/js/materialize.min.js";

const AddServiceModal = ({ addService }) => {
	const [vehicle, setVehicle] = useState("");
	const [description, setDescription] = useState("");
	const [user, setUser] = useState("");

	const onSubmit = () => {
		if (description === "" || user === "" || vehicle === "") {
			M.toast({
				html: "Please enter a value for all input fields"
			});
		} else {
			const newService = {
				vehicle,
				description,
				user,
				date: new Date(),
				attention: true,
				isComplete: false
			};

			addService(newService);

			M.toast({ html: `Service added by: ${user}` });

			// Clear fields
			setVehicle("");
			setDescription("");
			setUser("");
		}
	};

	return (
		<div id="add-service-modal" className="modal" style={modalStyle}>
			<div className="modal-content">
				<h4>Enter New Service</h4>
				<div className="row">
					<div className="input-field">
						<select
							name="vehicle"
							value={vehicle}
							className="browser-default"
							onChange={e => setVehicle(e.target.value)}>
							<option value="" disabled>
								Vehicle Number
							</option>
							<option value="61A1">61A1</option>
							<option value="61A2">61A2</option>
							<option value="61A3">61A3</option>
							<option value="61A4">61A4</option>
							<option value="FlyCar">FlyCar</option>
						</select>
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
								Added by
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

AddServiceModal.propTypes = {
	addService: PropTypes.func.isRequired
};

const modalStyle = {
	width: "75%",
	height: "75%"
};

export default connect(null, { addService })(AddServiceModal);
