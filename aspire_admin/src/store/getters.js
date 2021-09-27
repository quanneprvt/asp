export default {
	appTitle: state => state.apps.title,

	sidebarOpen: state => state.apps.sidebar.open,
	tipbarOpen: state => state.apps.tipbar.open,
	isMobile: state => state.apps.isMobile,

	role: state => state.permission.role,

	routes: state => state.permission.permittedRoutes,
}
