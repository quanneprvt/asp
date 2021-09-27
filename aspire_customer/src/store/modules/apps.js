export default {
	state: {
		title: 'aspire',
		sidebar: {
			open: true,
		},
		tipbar: {
			open: false,
		},
		sync: true,
		isMobile: false
	},
	mutations: {
		TOGGLE_SIDEBAR: state => {
			state.sidebar.open = !state.sidebar.open;
		},
		SYNC: state => {
			state.sync = !state.sync;
		},
		ON_MOBILE_VIEW: (state, payload) => {
			state.isMobile = payload;
		}
	}
}
