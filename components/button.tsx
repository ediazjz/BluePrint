"use client"

import { twMerge } from "tailwind-merge"

type TButton = {
  isDisabled?: boolean
  text: string
  colorStyle:
    | "btn-primary-filled"
    | "btn-primary-outlined"
    | "btn-primary-ghost"
    | "btn-accent-filled"
    | "btn-accent-outlined"
    | "btn-accent-ghost"
    | "btn-dark-filled"
    | "btn-dark-outlined"
    | "btn-dark-ghost"
  onClick?: () => void
  className?: string
}

export const Button = ({
  isDisabled,
  text,
  colorStyle,
  onClick,
  className,
}: TButton) => {
  return (
    <button
      type="button"
      className={twMerge(
        "flex rounded-lg px-5 py-2 transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-primary sm:px-9 xl:px-7 xl:py-[10px]",
        colorStyle,
        className
      )}
      disabled={isDisabled}
      onClick={() => onClick && onClick()}
    >
      {text}
    </button>
  )
}
