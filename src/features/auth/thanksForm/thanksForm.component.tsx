import cls from "./thanksForm.module.scss";
import { useEffect } from "react";
import { COOKIE_AUTH_TOKEN } from "@shared/cookies";
import Cookies from "js-cookie";

export const ThanksForm = () => {
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const token = Cookies.get(COOKIE_AUTH_TOKEN);
    if (token) {
      timer = setTimeout(() => {
        window.location.href = `${process.env.NEXT_PUBLIC_SITE_URL}/people/#token=${token}`;
      }, 3000);
    }

    return () => {
      timer && clearTimeout(timer);
    };
  }, []);

  return (
    <div className={cls.thanksForm}>
      <h2 className={cls.title}>Thank You</h2>
      <p className={cls.description}>
        To complete registration, please check your email.
      </p>
    </div>
  );
};
