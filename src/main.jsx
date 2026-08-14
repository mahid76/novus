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
import NovusAdvisoryFirm from "./components/NovuAdvisoryFirm/NovusAdvisoryFirm";
import NovusTax from "./components/NovusTax/NovusTax";
import NovusOverseas from "./components/NovusOverseas/NovusOverseas";
import NovusTranslationCentre from "./components/NovusTranslationCentre/NovusTranslationCentre";
import AdvisoryFirmPackages from "./pages/Packages/AdvisoryFirmPackages";
import TaxPackages from "./pages/Packages/TaxPackages";
import OverseasPackages from "./pages/Packages/OverseasPackages";
import TranslationCentrePackages from "./pages/Packages/TranslationCentrePackages";

const router = createBrowserRouter([
	{
		path: "/",
		Component: MainRoute,
		children: [
			{ index: true, Component: Home },
			{ path: "about", Component: About },
			{ path: "services", Component: Services },
			{ path: "contact", Component: Contact },
			{ path: "NovusAdvisoryFirm", Component: NovusAdvisoryFirm },
			{ path: "NovusAdvisoryFirm/packages", Component: AdvisoryFirmPackages },
			{ path: "NovusTax", Component: NovusTax },
			{ path: "NovusTax/packages", Component: TaxPackages },
			{ path: "NovusOverseas", Component: NovusOverseas },
			{ path: "NovusOverseas/packages", Component: OverseasPackages },
			{ path: "NovusTranslationCentre", Component: NovusTranslationCentre },
			{ path: "NovusTranslationCentre/packages", Component: TranslationCentrePackages },
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
