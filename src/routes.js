
import App from "./App"
import About from "./pages/About"
import Listing from "./pages/Listing"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Validation from "./pages/Validation"
// import FetchData from "./AxiosAssignment/Axios"
import Lifecycle from "./components/Lifecycle/Lifecycle"
import Lifecycleclass from "./components/Lifecycle/Lifecycleclass"
import Validation1 from "./pages/Validation1"
const Routes=[
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"listing",
                element:<Listing/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"signup",
                element:<Signup/>
            },
            {
                path:"validation",
                element:<Validation/>
            },
            // {
            //     path:"axios",
            //     element:<FetchData/>
            // },
            {
                path:"lifecycle",
                element:<Lifecycle/>
            },
            {
                path:"lifecycleclass",
                element:<Lifecycleclass/>
            },
            {
                path:"validation1",
                element:<Validation1/>
            },

        ]
    },

    {

    },
]
export default Routes
