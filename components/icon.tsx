import { twMerge } from "tailwind-merge"

import "material-symbols/outlined.css"

export type IconProps = {
  shape: string
  className?: string
}

export const Icon = ({ shape, className }: IconProps) => (
  <i className={twMerge("material-symbols-outlined text-2xl", className)}>
    {shape}
  </i>
)
