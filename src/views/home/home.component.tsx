import {
  PopupNames,
  PopupWrapper,
  RegisterForm,
  ThanksForm,
  usePopupContext,
} from "@features";
import cls from "./home.module.scss";
import Image from "next/image";
import { Button } from "@shared/ui";
import React from "react";

export const HomeView = () => {
  const { openPopup } = usePopupContext();

  return (
    <>
      <main className={cls.home}>
        <div className="container">
          <div className={cls.imageWrapper}>
            <Image
              src={"/images/people_faces_with_heart_in_center.webp"}
              width={729}
              height={690}
              alt={"people faces with heart in center"}
              priority
            />
          </div>

          <div className={cls.infoWrapper}>
            <div className={cls.info}>
              <h1 className={cls.title}>
                How to <br /> Participate
              </h1>

              <ul className={cls.list}>
                <li className={cls.listItem}>
                  <span className={cls.listNumber}>1.</span>
                  <p className={cls.listText}>Subscribe to our News</p>
                </li>
                <li className={cls.listItem}>
                  <span className={cls.listNumber}>2.</span>
                  <Button
                    onClick={() => openPopup(PopupNames.register)}
                    title="Sign Up"
                  />
                </li>
                <li className={cls.listItem}>
                  <span className={cls.listNumber}>3.</span>
                  <p className={cls.listText}>Check your email inbox</p>
                </li>
                <li className={cls.listItem}>
                  <span className={cls.listNumber}>4.</span>
                  <p className={cls.listText}>Wait till September 22</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <PopupWrapper popupName={PopupNames.register}>
        <RegisterForm />
      </PopupWrapper>

      <PopupWrapper popupName={PopupNames.thanks}>
        <ThanksForm />
      </PopupWrapper>
    </>
  );
};
