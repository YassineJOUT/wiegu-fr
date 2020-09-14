const isDev = process.env.REACT_APP_ENV === "development";
export const API_URL = isDev
  ? "http://weigu-api.yj-dev.com/"
  : "http://weigu-api.yj-dev.com/";
