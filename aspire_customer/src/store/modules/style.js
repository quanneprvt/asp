export default {
	state: {
		themes: {
			primary: '#3399ff',
			secondary: '#999999',
			success: '#00cc66',
			warning: '#ff9900',
			danger: '#f85555',
		},
		vars: {
			sidebar: {
				openWidth: 300,
				closeWidth: 120,
				bgc: '#0C365A',
			},
			toolbar: {
				height: 50,
			},
			card: {
				borderRadius: 8
			}
		}
	},
	getters: {
		STYLE_VARIABLES: (state, getters, rootState, rootGetters) => {
			return {
				'--sidebar-bgc': state.vars.sidebar.bgc,
				'--sidebar-width': (rootGetters.sidebarOpen ? state.vars.sidebar.openWidth : state.vars.sidebar.closeWidth) + 'px',
				'--toolbar-height': state.vars.toolbar.height + 'px',
				'--card-border-radius': state.vars.card.borderRadius + 'px'
			}
		}
	}
}
