import { jwtDecode } from "jwt-decode";

export const verifyToken = (token: string) => {
  console.log(token, "va");
  const user = jwtDecode(token);
  return user;
};
