import clsx from "clsx";

import cls from "./button.module.scss";
import { IButton } from "./button.model";

export const Button = ({
  onClick,
  title,
  className,
  type = "button",
  disabled = false,
}: IButton) => {
  return (
    <button
      className={clsx(cls.button, className)}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
