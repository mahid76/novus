import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainRoute from "./components/MainRoute/MainRoute";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import About from "./pages/About";

const router = createBrowserRouter([
	{
		path: "/",
		Component: MainRoute,
		children: [
			{ index: true, Component: Home },
			{ path: "about", Component: About },
			{ path: "services", Component: Services },
			{ path: "contact", Component: Contact },
		],
	},
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
