import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AnalyticsProvider from "./context/AnalyticsProvider";
import { default as MixPanelProvider } from "./context/MixPanelProvider";
import UserLocationProvider from "./context/UserLocationProvider";

const HomeOne = lazy(() => import("./home/HomeOne"));
const Services = lazy(() => import("./service/Services"));
const ServiceDetailsLeftSidebar = lazy(() =>
  import("./service/ServiceDetailsLeftSidebar")
);
const Contact = lazy(() => import("./pages/Contact"));
const NoMatch = lazy(() => import("./pages/404"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <AnalyticsProvider>
          <MixPanelProvider>
            <UserLocationProvider>
              <Routes>
                <Route path="/" element={<HomeOne />} />
                <Route path="/services" element={<Services />} />
                <Route
                  path="/services/:service"
                  element={<ServiceDetailsLeftSidebar />}
                />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="*" element={<NoMatch />} />
              </Routes>
            </UserLocationProvider>
          </MixPanelProvider>
        </AnalyticsProvider>
      </Suspense>
    </Router>
  );
}

export default App;
