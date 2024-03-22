export const IS_DEVELOPMENT = process.env.NODE_ENV === "development";

export const BASE_URL = process.env.REACT_APP_PUBLIC_URL;

export const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;

export const SERVICES = {
  AERATION: "Aeration",
  DETHATCHING: "Dethatching",
  WINDOW_CLEANING: "Window Cleaning",
  INTERLOCK_CLEANING: "Interlock Cleaning",
};

export const SERVICES_PATHS = {
  AERATION: "aeration",
  DETHATCHING: "dethatching",
  WINDOW_CLEANING: "window-cleaning",
  INTERLOCK_CLEANING: "interlock-cleaning",
};

export const MIXPANEL_EVENTS = {
  PAGE_VIEW: "Page View",
  BUTTON_CLICK: "Button Click",
};
