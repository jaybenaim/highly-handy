import React, { createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { IS_DEVELOPMENT, MIXPANEL_EVENTS } from "../consts";
import { useMixPanel } from "./MixPanelProvider";

const UserLocationContext = createContext();

export const useUserLocation = () => useContext(UserLocationContext);

const UserLocationProvider = ({ children }) => {
  const location = useLocation();
  // const [userLocation, setUserLocation] = useState({
  //   city: "",
  //   country: "",
  // });
  const { mixpanelTrack } = useMixPanel();

  const trackPageView = () => {
    if (!IS_DEVELOPMENT) {
      let userId = localStorage.getItem("user_id");
      if (!userId) {
        userId = uuidv4();
        localStorage.setItem("user_id", userId);
      }

      const initialReferer = document.referrer || "";
      mixpanelTrack(MIXPANEL_EVENTS.PAGE_VIEW, userId, {
        page: location.pathname,
        referer: initialReferer,
        // $city: userLocation.city,
        // $country: userLocation.country,
      }).catch((err) => console.log(err));
    } else {
      console.log("Mixpanel disabled");
    }
  };

  // useEffect(() => {
  //   const getCachedLocation = () => {
  //     const cachedLocation = JSON.parse(localStorage.getItem("user_location"));
  //     if (cachedLocation) {
  //       setUserLocation(cachedLocation);
  //       return true;
  //     }
  //   };

  //   const fetchUserLocation = async () => {
  //     try {
  //       const response = await fetch("https://ipapi.co/json/");
  //       if (response.ok) {
  //         const data = await response.json();
  //         const { latitude, longitude, city, country } = data;
  //         const locationData = { latitude, longitude, city, country };
  //         setUserLocation(locationData);
  //         localStorage.setItem("user_location", JSON.stringify(locationData));
  //       } else {
  //         console.error("Failed to fetch location data");
  //       }
  //     } catch (error) {
  //       console.error("Error getting user location:", error);
  //     }
  //   };

  //   const cached = getCachedLocation();
  //   !cached && fetchUserLocation();
  //   trackPageView();
  // }, []);

  useEffect(() => {
    // Listen for location changes and track page view
    trackPageView();
  }, [location.pathname]); // Track page view when location.pathname changes

  return (
    <UserLocationContext.Provider value={{}}>
      {children}
    </UserLocationContext.Provider>
  );
};

export default UserLocationProvider;
