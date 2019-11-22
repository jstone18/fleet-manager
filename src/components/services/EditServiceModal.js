import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateService } from "../../redux/actions/serviceActions";

const EditServiceModal = ({ updateService, current }) => {
	const [vehicle, setVehicle] = useState("");
	const [description, setDescription] = useState("");
	const [user, setUser] = useState("");
	const [attention, setAttention] = useState(false);

	useEffect(() => {
		if (current) {
			setVehicle(current.vehicle);
			setDescription(current.description);
			setAttention(current.attention);
			setUser(current.user);
		}
	}, [current]);

	const onSubmit = () => {
		if (description === "" || user === "") {
			M.toast({
				html: "Please enter a description and person creating form"
			});
		} else {
			const updService = {
				id: current.id,
				vehicle,
				description,
				user,
				attention,
				date: new Date()
			};
			updateService(updService);
			M.toast({
				html: "Service Log has been updated."
			});
		}
	};

	return (
		<div id="edit-service-modal" className="modal" style={modalStyle}>
			<div className="modal-content">
				<h4>Edit Service</h4>
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
						Vehicle:
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
						Service Description:
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
						Updated by:
					</div>
				</div>

				<div className="row">
					<div className="input-field">
						<p>
							<label>
								<input
									type="checkbox"
									className="filled-in"
									checked={attention}
									value={attention}
									onChange={e => setAttention(!attention)}
								/>
								<span>Needs Attention</span>
							</label>
						</p>
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

EditServiceModal.propTypes = {
	current: PropTypes.object.isRequired,
	updateService: PropTypes.func.isRequired
};

const modalStyle = {
	width: "75%",
	height: "75%"
};

const mapStateToProps = state => ({
	current: state.service.current
});
export default connect(mapStateToProps, { updateService })(EditServiceModal);
