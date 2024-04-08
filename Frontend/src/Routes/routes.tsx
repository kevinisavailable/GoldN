import { Dashboard, Home } from "../Screens/screens";
import { createBrowserRouter } from "react-router-dom";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path : "/dashboard",
        element : <Dashboard />
    },
]);

export {routes}