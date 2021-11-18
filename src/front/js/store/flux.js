const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			loggedIn: false,
			token: null,
			message: null,
			userData: {}
		},
		actions: {
			forceLogin: () => {
				setStore({
					loggedIn: true,
					token: sessionStorage.getItem("token")
				});
			},
			logout: () => {
				sessionStorage.removeItem("token");
				setStore({
					loggedIn: false,
					token: null,
					userData: {}
				});
			},
			login: async (email, password, remember) => {
				const options = {
					method: "POST",
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				};

				const resp = await fetch(process.env.BACKEND_URL + "/api/token", options);
				const data = await resp.json();

				if (resp.status === 401) {
					setStore({ message: data.msg });
					return false;
				}

				if (remember === "checked") {
					sessionStorage.setItem("token", data.token);
				}
				setStore({
					loggedIn: true,
					token: data.token,
					message: ""
				});
				return true;
			},
			createUser: async (user_name, email, password, remember) => {
				const actions = getActions();
				const options = {
					method: "POST",
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify({
						user_name: user_name,
						email: email,
						password: password
					})
				};
				const resp = await fetch(process.env.BACKEND_URL + "/user", options);
				const data = await resp.json();
				if (resp.status === 401) return false;
				actions.login(email, password, remember);
				return data;
			},
			getProfileData: async token => {
				const options = {
					method: "GET",
					headers: {
						Authorization: "Bearer " + token
					}
				};

				fetch(process.env.BACKEND_URL + "/api/user", options)
					.then(resp => resp.json())
					.then(data => {
						setStore({ userData: data });
					})
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
