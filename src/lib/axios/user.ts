import axios, { InternalAxiosRequestConfig } from "axios";
import { getCookie, setCookie } from "cookies-next";

const user = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
  // withCredentials: true,
});

user.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    const token = getCookie("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

user.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalConfig = error.config;

    if (error.status === 403) {
      const refreshToken = getCookie("refreshToken");
      const data = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/${process.env.NEXT_PUBLIC_SERVER_VERSION}/auth/refresh_access_token`,
        { refresh_token: `Bearer ${refreshToken}` }
      );

      const newToken = data.data.access_token;
      // deleteCookie("token", { path: "/" });
      setCookie("token", newToken, { path: "/", maxAge: 1209600 });

      return user.request(originalConfig);
    }
    return Promise.reject(error);
  }
);

export default user;
