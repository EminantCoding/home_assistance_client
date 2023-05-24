import { useCookies } from "react-cookie";

const loginUser = async (payload) => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const [error, response] = await withCatch(
    POST,
    apiLocations.LOGIN(),
    "",
    payload
  );
  if (response) {
    try {
      setCookie("token", response?.data?.jwt);
    } catch (err) {
      setCookie("token", null);
    }
  }
  return [error, response];
};

export const loginReducer = {
  login: loginUser,
  decrement: (state, action) => {
    state.count = state.count - 1;
  },
};
