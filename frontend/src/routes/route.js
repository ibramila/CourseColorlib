import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import Add from "../pages/Add"
import AboutUs from "../pages/AboutUs"
import Contact from "../pages/Contact";
import News from "../pages/News";
import Elements from "../pages/Elements";
import Courses from "../pages/Courses";

export const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "aboutus",
                element: <AboutUs />
            },
            {
                path: "add",
                element: <Add />
            },
            {
                path: "contacts",
                element: <Contact />
            },
            {
                path: "courses",
                element: <Courses />
            }
            , {
                path: "news",
                element: <News />
            }, {
                path: "elements",
                element: <Elements />
            }
        ]
    }
]