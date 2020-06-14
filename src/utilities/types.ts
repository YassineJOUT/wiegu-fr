export interface formValues {
  email: string;
  password: string;
  username?: string;
  terms?: boolean;
}

export type State = {
  success: boolean;
  message?: string;
  error?: string;
};

export type StateImage = {
  success: boolean;
  message?: string;
  error?: string;
  preview?: null | string,
  loading?: boolean,
  file?: null | File,
};

export type Action =
  | { type: "request" }
  | { type: "success"; message: string }
  | { type: "failure"; error: string }
  | { type: "preview"; preview: string,file: null | File }
  | { type: "loading"; loading: boolean };
