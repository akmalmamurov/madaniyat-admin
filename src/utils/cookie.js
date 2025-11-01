import Cookies from "js-cookie";

export const cookieStorage = {
  getItem: (name) => {
    const value = Cookies.get(name);
    return value === undefined ? null : value;
  },
  setItem: (name, value) => {
    Cookies.set(name, value, {
      secure: true,
      sameSite: "lax",
    });
  },
  removeItem: (name) => {
    Cookies.remove(name);
  },
};
