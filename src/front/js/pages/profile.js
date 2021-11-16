import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/profile.scss";

export const Profile = () => {
	const { store, actions } = useContext(Context);
	let history = useHistory();

	useEffect(
		() => {
			if (store.token && store.token !== "" && store.token !== undefined) actions.getProfileData();
			else history.push("/");
		},
		[store.token]
	);

	return (
		<div className="view">
			<h2>Welcome: {store.userData.user_name}</h2>
		</div>
	);
};
