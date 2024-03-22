import join from "../lib/joinClasses";

export type TButton = {
  label?: string;
  type: "button" | "submit" | "reset";
  size: "small" | "DEFAULT" | "big";
  color: "accent" | "dark" | "error";
  style?: "outlined" | "ghost";
  isDisabled?: boolean;
  onClick?: () => void;
};

const BUTTON_SIZES = {
  small: "px-3 py-[0.313rem] lg:px-4 py-2",
  DEFAULT: "px-4 py-[0.563rem] lg:px-5 py-3",
  big: "px-6 py-[0.813rem] lg:px-7 py-4",
};
const BUTTON_COLORS = {
  accent:
    "bg-accent text-light border-accent hover:bg-accent-dark hover:border-accent-dark active:bg-accent-darker active:border-accent-darker",
  dark: "bg-gray-700 text-light border-gray-700 hover:bg-gray-900 hover:border-gray-900 active:bg-dark active:border-dark",
  error: "bg-feedback-error text-light border-feedback-error",
};
const BUTTON_STYLES = {
  outlined: "px-4 py-[0.563rem] lg:px-5 py-3",
  ghost: "px-6 py-[0.813rem] lg:px-7 py-4",
};

export default function Button({
  label,
  size,
  style,
  color,
  type,
  onClick,
  isDisabled = false,
}: TButton) {
  return (
    <button
      className={join(
        BUTTON_SIZES[size],
        BUTTON_COLORS[color],
        style && BUTTON_STYLES[style],
        "flex justify-center space-x-2 rounded-lg text-center font-satoshi ring-0 transition-all duration-300 ease-in-out hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-dark focus:ring-opacity-50 active:shadow-inner active:ring-2 active:ring-accent-darker active:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50"
      )}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
