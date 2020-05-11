import { createContext, Dispatch, SetStateAction } from "react";

// localStorage.js
export const loadState = ():Context => {
    const serializedState = localStorage.getItem("vato-sate");
    if (serializedState !== null) {
      return JSON.parse(serializedState);
    }
    else return initialContext;
};
// localStorage.js
export const saveState = (state:Context) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('vato-sate', serializedState);
    } catch {
      // ignore write errors
    }
  };
export interface AuthType {
  isLogged: boolean;
  user: {
    id: string;
    role: string;
  };
}

export const initialState: AuthType = {
  isLogged: false,
  user: {
    id: "",
    role: "",
  },
};

export type Context = {
  contextState: AuthType;
  setContext: Dispatch<SetStateAction<Context>>;
};

export const initialContext: Context = {
  contextState: initialState,
  setContext: (): void => {
    throw new Error("setContext function must be overridden");
  },
};
export const Context = createContext<Context>(initialContext);
