import { useState } from "react";
import { PopupNames, usePopupContext } from "../../popup";
import Cookies from "js-cookie";
import { COOKIE_AUTH_TOKEN } from "@shared/cookies";
import { useNotistack } from "@shared/hooks";
import axios from "axios";

type HandleSubmitData = {
  email: string;
  password: string;
};

export const useRegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const { closePopup, openPopup } = usePopupContext();
  const { notifyError } = useNotistack();

  const register = async (data: HandleSubmitData) => {
    setLoading(true);

    try {
      // Try to login
      const credentials = btoa(`${data.email}:${data.password}`);
      const loginResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_API_HOST}/identity`,
        {
          headers: {
            Authorization: `Basic ${credentials}`,
          },
        }
      );

      const token = loginResponse.headers["x-token"];

      if (token) {
        Cookies.set(COOKIE_AUTH_TOKEN, token);
        window.location.href = `${process.env.NEXT_PUBLIC_SITE_URL}/people/#token=${token}`;
      }
    } catch (loginError: any) {
      // If login fails, assume the user doesn't exist and try to register
      if (
        loginError.response?.status === 404 ||
        loginError.response?.status === 401
      ) {
        try {
          const registerResponse = await axios.put(
            `${process.env.NEXT_PUBLIC_API_HOST}/identity`,
            data
          );
          const token = registerResponse.headers["x-token"];

          if (token) {
            Cookies.set(COOKIE_AUTH_TOKEN, token);
            closePopup(PopupNames.register);
            openPopup(PopupNames.thanks);
          }
        } catch (err) {
          notifyError("Registration failed. Please try again.");
        }
      } else {
        notifyError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { register, loading };
};
