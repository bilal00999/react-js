import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Contact from "./Contact/Contact.jsx";
import GitHub, { GithubInfoLoader } from "./Github/Github.jsx";
import User from "./User/User.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route loader={GithubInfoLoader} path="github" element={<GitHub />} />
      <Route path="user/:userid" element={<User />} />
    </Route>
  )
);

// const router = createBrowserRouter([
//   {
//     path: "",
//     element: <Layout />,
//     children: [{ path: "/", element: <Home /> }],
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
