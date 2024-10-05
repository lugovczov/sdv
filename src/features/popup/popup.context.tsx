import { createContext, useContext, useState } from "react";
import { PopupNames } from "./popup.model";

type PopupContextType = {
  openPopup: (popupName: PopupNames) => void;
  closePopup: (popupName: PopupNames) => void;
  isPopupOpen: (popupName: PopupNames) => boolean;
};

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const usePopupContext = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopupContext must be used within a PopupProvider");
  }
  return context;
};

export const PopupProvider = ({ children }: { children: React.ReactNode }) => {
  const [openPopups, setOpenPopups] = useState<{
    [key in PopupNames]?: boolean;
  }>({});

  const openPopup = (popupName: PopupNames) => {
    setOpenPopups((prev) => ({ ...prev, [popupName]: true }));
  };

  const closePopup = (popupName: PopupNames) => {
    setOpenPopups((prev) => ({ ...prev, [popupName]: false }));
  };

  const isPopupOpen = (popupName: PopupNames) => {
    return !!openPopups[popupName];
  };

  return (
    <PopupContext.Provider value={{ openPopup, closePopup, isPopupOpen }}>
      {children}
    </PopupContext.Provider>
  );
};
