import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./../store/appContext";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		showModal: false
	});

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<select name="agenda" id="" onChange={e => actions.setAsignarAgenda(e.target.value)}>
						<option value="">Seleccione Agenda</option>
						{store.agendas.length > 0 &&
							store.agendas.map((item, i) => {
								return (
									<option key={i} value={item}>
										{item}
									</option>
								);
							})}
					</select>
				</div>
			</div>
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.length > 0 &&
							store.contacts.map((item, i) => {
								return (
									<ContactCard key={i} item={item} onDelete={() => setState({ showModal: true })} />
								);
							})}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
