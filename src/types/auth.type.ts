export type TUser = {
  _id: string;
  email: string;
  role: "user" | "admin";
  iat: number;
  exp: number;
};
