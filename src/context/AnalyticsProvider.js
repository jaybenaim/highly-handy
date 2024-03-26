import { Analytics } from "@vercel/analytics/react";
import { createContext, useContext } from "react";

const AnalyticsContext = createContext();

export const useAnalytics = () => useContext(AnalyticsContext);

const AnalyticsProvider = ({ children }) => {
  return (
    <AnalyticsContext.Provider value={{}}>
      <Analytics />
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;
