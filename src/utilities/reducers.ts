import { State, Action, StateImage } from "./types";

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "success":
      return { success: true, message: action.message };
    case "failure":
      return { success: false, error: action.error };
    default:
      return { ...state };
  }
};
export const reducerImage = (state: StateImage, action: Action): StateImage => {
  switch (action.type) {
    case "preview":
      return {
        success: false,
        message: "",
        loading: false,
        preview: action.preview,
        file: action.file,
      };
    case "success":
      return { success: true, message: action.message, loading: false };
    case "failure":
      return { success: false, error: action.error, loading: false };
    case "request":
      return { success: false,  loading: true };
    default:
      return { ...state };
  }
};
