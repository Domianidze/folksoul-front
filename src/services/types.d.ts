export type HookFormSubmitData = {
  [x: string]: any;
};

export type MessageResponse = {
  message: string;
};

export type LoginResponse = {
  token: string;
  userId: string;
  expiresIn: string;
};
