import mixpanel from "mixpanel-browser";
import React, { Suspense, lazy, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { IS_DEVELOPMENT } from "./consts";

const HomeOne = lazy(() => import("./home/HomeOne"));
const Services = lazy(() => import("./service/Services"));
const ServiceDetailsLeftSidebar = lazy(() =>
  import("./service/ServiceDetailsLeftSidebar")
);
const Contact = lazy(() => import("./pages/Contact"));
const NoMAtch = lazy(() => import("./pages/404"));

const App = () => {
  useEffect(() => {
    mixpanel.init("YOUR_TOKEN", {
      debug: IS_DEVELOPMENT,
      track_pageview: true,
      persistence: "localStorage",
    });
  }, []);

  return (
    <Router>
      <Suspense fallback={<div />}>
        <Routes>
          <Route path="/" element={<HomeOne />} />
          <Route exact path="/services" element={<Services />} />
          <Route
            exact
            path="/services/:service"
            element={<ServiceDetailsLeftSidebar />}
          />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="*" element={<NoMAtch />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
