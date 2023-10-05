import { createBrowserRouter } from "react-router-dom";
import Property from "../Property";
import App from "../App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/property/:id',
        element: <Property />
    }
])


export default router;