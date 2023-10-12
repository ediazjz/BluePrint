"use client"

import { twMerge } from "tailwind-merge"

import { Icon } from "./icon"

export type ButtonProps = {
  type: "button" | "submit" | "reset"
  text: string
  icon?: string
  styling:
    | "btn-primary-filled"
    | "btn-primary-outlined"
    | "btn-primary-ghost"
    | "btn-dark-filled"
    | "btn-dark-outlined"
    | "btn-dark-ghost"
    | "btn-danger-filled"
    | "btn-danger-outlined"
    | "btn-danger-ghost"
  onClick?: () => any
  className?: string
  iconClassName?: string
}

export const Button = ({
  type,
  text,
  icon,
  styling,
  onClick,
  className,
  iconClassName,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick ? () => onClick() : undefined}
      type={type}
      className={twMerge(
        "inline-flex items-center justify-center space-x-2 rounded-sm border py-2 text-center transition duration-300 ease-linear disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 xl:py-[9px]",
        styling,
        icon ? "pl-4 pr-6 xl:pl-6 xl:pr-7" : "px-5 xl:px-7",
        className
      )}
    >
      {icon && (
        <Icon
          shape={icon}
          className={twMerge("text-base xl:text-xl", iconClassName)}
        />
      )}

      <span className="focus">{text}</span>
    </button>
  )
}
