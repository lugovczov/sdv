export interface IButton {
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  title: string;
  type?: "button" | "submit" | "reset";
}
