import {
    createBrowserRouter,
} from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import ListScreen from "../screens/ListScreen";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",//TODO improve this route
                element: <HomeScreen />,
            },
            {
                path: "/movies",
                element: <HomeScreen />,
            },
            {
                path: "/details/:id",
                element: <DetailsScreen />,
            },
            {
                path: "/list",
                element: <ListScreen />,
            },
        ]
    },
]);

export default router;