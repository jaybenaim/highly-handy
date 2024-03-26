import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { createContext, useContext } from "react";

const AnalyticsContext = createContext();

export const useAnalytics = () => useContext(AnalyticsContext);

const AnalyticsProvider = ({ children }) => {
  return (
    <AnalyticsContext.Provider value={{}}>
      <Analytics />
      <SpeedInsights />
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;
