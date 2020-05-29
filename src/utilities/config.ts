const isDev = process.env.REACT_APP_ENV === "development";
export const API_URL = isDev
  ? "http://localhost:30108/"
  : "http://weigu-api.yj-dev.com/";
