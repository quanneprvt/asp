import error from "./error";

const fullRoutes = [
  {
    path: "/",
    name: "Home",
    components: {
      default: () => import("@/views/common/Home/index"),
      tip: () => import("@/views/common/Home/tip"),
    },
    meta: {
      icon: require('!svg-inline-loader!../assets/icons/Home.svg'),
    }
  },
	{
    path: "/loans",
    name: "Loan",
    components: {
      default: () => import("@/views/common/Loans/index"),
    },
    meta: {
      icon: require('!svg-inline-loader!../assets/icons/Payments.svg'),
    }
  },
  error
];

export default fullRoutes;
