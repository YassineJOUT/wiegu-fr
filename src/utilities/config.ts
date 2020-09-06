const isDev = process.env.REACT_APP_ENV === "development";
export const API_URL = isDev
  ? "http://localhost:3010/"
  : "http://localhost:3010/";
