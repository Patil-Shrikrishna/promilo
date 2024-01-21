import { sha256 } from "js-sha256";

export const hashPassword = (password) => {
  const hashedPassword = sha256.create();
  hashedPassword.update(password);
  return hashedPassword.hex();
};

export const setToken = (token) => {
  localStorage.setItem("access_token", token);
};

export const getToken = () => {
  return localStorage.getItem("access_token");
};
