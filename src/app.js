import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const HomeOne = lazy(() => import("./home/HomeOne"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./service/Services"));
const ServiceDetailsLeftSidebar = lazy(() =>
  import("./service/ServiceDetailsLeftSidebar")
);
const ServiceDetailsRightSidebar = lazy(() =>
  import("./service/ServiceDetailsRightSidebar")
);
const Projects = lazy(() => import("./project/Projects"));
const ProjectDetails = lazy(() => import("./project/ProjectDetails"));
const BlogLeftSidebar = lazy(() => import("./blog/BlogLeftSidebar"));
const BlogRightSidebar = lazy(() => import("./blog/BlogRightSidebar"));
const BlogDetailsLeftSidebar = lazy(() =>
  import("./blog/BlogDetailsLeftSidebar")
);
const BlogDetailsRightSidebar = lazy(() =>
  import("./blog/BlogDetailsRightSidebar")
);
const Contact = lazy(() => import("./pages/Contact"));
const NoMAtch = lazy(() => import("./pages/404"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div />}>
        <Routes>
          <Route path="/" element={<HomeOne />} />
          <Route path="/about-us" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route
            exact
            path="/services/:service"
            element={<ServiceDetailsLeftSidebar />}
          />
          <Route
            path="/service-details-right-sidebar"
            element={<ServiceDetailsRightSidebar />}
          />
          {/* <Route path="/projects" element={<Projects />} /> */}
          {/* <Route path="/project-details" element={<ProjectDetails />} /> */}
          {/* <Route path="/blog-left-sidebar" element={<BlogLeftSidebar />} /> */}
          {/* <Route path="/blog-right-sidebar" element={<BlogRightSidebar />} /> */}
          {/* <Route
            path="/blog-details-left-sidebar"
            element={<BlogDetailsLeftSidebar />}
          />
          <Route
            path="/blog-details-right-sidebar"
            element={<BlogDetailsRightSidebar />}
          /> */}
          <Route path="/contact-us" element={<Contact />} />
          <Route path="*" element={<NoMAtch />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
