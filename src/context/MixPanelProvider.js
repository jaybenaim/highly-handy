import { createContext, useContext } from "react";
import { BACKEND_BASE_URL, IS_DEVELOPMENT } from "../consts";

const MixPanelContext = createContext({
  mixpanelTrack: async (eventName, eventData, debug) => {},
});

export const useMixPanel = () => useContext(MixPanelContext);

const MixPanelProvider = ({ children }) => {
  const mixpanelTrack = async (eventName, eventData, debug = false) => {
    if (IS_DEVELOPMENT || debug) {
      console.log("Mixpanel disabled");
      return;
    }

    try {
      const response = await fetch(BACKEND_BASE_URL + "/api/mixpanel", {
        method: "POST",
        body: JSON.stringify({
          eventName,
          eventData,
        }),
      });

      console.log("response", response);
    } catch (err) {
      console.log("ERROR Failed to send mixpanel event", eventName);
    }
  };

  return (
    <MixPanelContext.Provider
      value={{
        mixpanelTrack,
      }}
    >
      {children}
    </MixPanelContext.Provider>
  );
};

export default MixPanelProvider;
