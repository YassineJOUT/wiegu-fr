import { State, Action } from "./types";

export const  reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "success":
        return { success: true, message: action.message };
      case "failure":
        return { success: false, error: action.error };
      default:
        return { ...state };
    }
  }