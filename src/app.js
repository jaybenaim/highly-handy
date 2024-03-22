import mixpanel from "mixpanel-browser";
import React, { Suspense, lazy, useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import { IS_DEVELOPMENT } from "./consts";

const HomeOne = lazy(() => import("./home/HomeOne"));
const Services = lazy(() => import("./service/Services"));
const ServiceDetailsLeftSidebar = lazy(() =>
  import("./service/ServiceDetailsLeftSidebar")
);
const Contact = lazy(() => import("./pages/Contact"));
const NoMatch = lazy(() => import("./pages/404"));

function App() {
  const navigate = useNavigate();
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    mixpanel.init(process.env.REACT_APP_MIXPANEL_PROJECT_ID, {
      debug: IS_DEVELOPMENT,
      track_pageview: true,
      persistence: "localStorage",
    });

    const unlisten = navigate((location) => {
      console.log("Route changed:", location.pathname);
      // Track page view
      if (!IS_DEVELOPMENT && userLocation) {
        const initialReferer = document.referrer || "";
        mixpanel.track("Page View", {
          page: location.pathname,
          referer: initialReferer,
          $city: userLocation.city,
          $country: userLocation.country,
        });
      }
    });

    return () => {
      unlisten();
    };
  }, [navigate, userLocation]);

  useEffect(() => {
    const getCachedLocation = () => {
      const cachedLocation = JSON.parse(localStorage.getItem("user_location"));
      if (cachedLocation) {
        setUserLocation(cachedLocation);
        return true;
      }
    };

    const fetchUserLocation = async () => {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = position.coords;
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );

        if (response.ok) {
          const data = await response.json();
          const { city, country } = data.address;
          const locationData = { latitude, longitude, city, country };
          setUserLocation(locationData);
          localStorage.setItem("user_location", JSON.stringify(locationData));
        } else {
          console.error("Failed to fetch location data");
        }
      } catch (error) {
        console.error("Error getting user location:", error);
      }
    };

    const cached = getCachedLocation();
    !cached && fetchUserLocation();
  }, []);

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </Router>
  );
}

export default App;
