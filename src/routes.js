import App from "./App"
import About from "./pages/About"
import Listing from "./pages/Listing"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

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

        ]
    },

    {

    },
]
export default Routes
