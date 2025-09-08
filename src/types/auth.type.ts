export type TUser = {
  _id: string;
  email: string;
  role: "user" | "admin";
  iat: number;
  exp: number;
};

export type TUserData = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  image: string;
  role: "user" | "admin";
};
