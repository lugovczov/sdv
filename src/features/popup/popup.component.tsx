import { ReactNode, useEffect } from "react";
import cls from "./popup.module.scss";
import { usePopupContext } from "./popup.context";
import { PopupNames } from "@features";
import crossIcon from "@assets/icons/cross.svg";
import Image from "next/image";

type PopupWrapperProps = {
  popupName: PopupNames;
  children: ReactNode;
};

export const PopupWrapper = ({ popupName, children }: PopupWrapperProps) => {
  const { isPopupOpen, closePopup } = usePopupContext();

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup(popupName);
      }
    };

    if (isPopupOpen(popupName)) {
      document.addEventListener("keydown", handleEsc);
    } else {
      document.removeEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isPopupOpen(popupName), popupName, closePopup]);

  if (!isPopupOpen(popupName)) return null;

  return (
    <div className={cls.popupOverlay}>
      <div className={cls.popupContent}>
        <button
          className={cls.closeButton}
          onClick={() => closePopup(popupName)}
        >
          <Image src={crossIcon} alt={"cross icon"} width={30} height={30} />
        </button>
        {children}
      </div>
    </div>
  );
};
