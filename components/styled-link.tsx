"use client"

import Link from "next/link"

import { twMerge } from "tailwind-merge"

import { Icon } from "./icon"

export type StyledLinkProps = {
  href: string
  type: "internal" | "external"
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
  className?: string
  iconClassName?: string
}

export const StyledLink = ({
  href,
  type,
  text,
  icon,
  styling,
  className,
  iconClassName,
}: StyledLinkProps) => {
  const buttonContent = (
    <>
      {icon && (
        <Icon
          shape={icon}
          className={twMerge("text-base xl:text-xl", iconClassName)}
        />
      )}
      <span className="focus">{text}</span>
    </>
  )

  const buttonClass = twMerge(
    "inline-flex items-center justify-center space-x-2 rounded-full border py-2 text-center transition duration-300 ease-linear disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 xl:py-[9px]",
    styling,
    icon ? "pl-4 pr-6 xl:pl-6 xl:pr-7" : "px-5 xl:px-7",
    className
  )

  return type === "internal" ? (
    <Link href={href} className={buttonClass}>
      {buttonContent}
    </Link>
  ) : (
    <a
      href={href}
      className={buttonClass}
      target="_blank"
      rel="noopener noreferrer"
    >
      {buttonContent}
    </a>
  )
}
