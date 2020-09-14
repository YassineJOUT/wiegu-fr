const isDev = process.env.REACT_APP_ENV === "development";
export const API_URL = isDev
  ? "https://weigu-api.yj-dev.com/"
  : "https://weigu-api.yj-dev.com/";
