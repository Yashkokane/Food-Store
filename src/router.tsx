import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import Homepage from "./Pages/Homepage";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Menu from './Pages/Menu'
import Testimonials from "./Pages/Testimonials";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/menu", element: <Menu /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/testimonials", element: <Testimonials /> },
      { path: "/about", element: <AboutUs /> },
    ],
  },
]);

export default router;