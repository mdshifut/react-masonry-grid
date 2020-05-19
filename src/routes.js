import HomeIcon from "@material-ui/icons/Home";
import BarChartIcon from "@material-ui/icons/BarChart";
import ListIcon from "@material-ui/icons/List";
import SettingsIcon from "@material-ui/icons/Settings";
import LaptopMacRoundedIcon from "@material-ui/icons/LaptopMacRounded";
import NetworkCellIcon from "@material-ui/icons/NetworkCell";

// Views
import Home from "./views/Home/Home";
import Preview from "./views/Preview/Preview";
import Devices from "./views/Devices/Devices";
import Reports from "./views/Reports/Reports";
import Policies from "./views/Policies/Policies";
import Network from "./views/Network/Network";

const dashRoutes = [
  {
    path: "/",
    name: "Home",
    icon: HomeIcon,
    component: Home,
  },
  {
    path: "/preview/:id",
    name: "Preview",
    invisible: true,
    component: Preview,
  },
  {
    path: "/devices",
    name: "Devices",
    icon: BarChartIcon,
    component: Devices,
  },

  {
    path: "/reports",
    name: "Reports",
    icon: ListIcon,
    component: Reports,
  },

  {
    name: "Settings",
    icon: SettingsIcon,
    collapse: true,
    path: "/settings",
    views: [
      {
        path: "/settings/policies",
        name: "Policies",
        icon: LaptopMacRoundedIcon,
        component: Policies,
      },
      {
        path: "/settings/network",
        name: "Network",
        icon: NetworkCellIcon,
        component: Network,
      },
    ],
  },
];

export default dashRoutes;
