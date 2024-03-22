import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
      </Suspense>
    </Router>
  );
}

export default App;
