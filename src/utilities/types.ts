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

export type Action =
  | { type: "request" }
  | { type: "success"; message: string }
  | { type: "failure"; error: string };
