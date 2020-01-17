const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			agenda: "",
			agendas: [],
			contacts: [],
			nameAgenda: ""
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getAgendas: url => {
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ agendas: data }))
					.catch(err => console.log(err));
			},

			getContacts: url => {
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ contacts: data }))
					.catch(err => console.log(err));
			},

			setAsignarAgenda: agenda => {
				// const store = getStore();
				// setStore({ nameAgenda: nameAgenda });
				getActions().getContacts(`https://assets.breatheco.de/apis/fake/contact/agenda/${agenda}`);
			}
		}
	};
};

export default getState;
