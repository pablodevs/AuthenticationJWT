import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let history = useHistory();

	return (
		<nav>
			<Link to="/" className="navbar-Link">
				<h3 className="navbar-home">Home</h3>
			</Link>
			<div className="navbar-group">
				{store.loggedIn ? (
					<>
						<button
							className="navbar-Link"
							onClick={() => {
								history.push("/profile");
							}}>
							Profile
						</button>
						<button
							className="navbar-Link"
							onClick={() => {
								actions.logout();
							}}>
							Log out
						</button>
					</>
				) : (
					<Link to="/login" className="navbar-Link">
						Log in
					</Link>
				)}
			</div>
		</nav>
	);
};
