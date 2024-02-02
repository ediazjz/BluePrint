type IllustrationProps = {
  className?: string
}

export const GaugeHigh = ({ className }: IllustrationProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="96"
      height="96"
      className={className}
      fill="currentColor"
      viewBox="0 0 96 96"
    >
      <g>
        <path d="M0 48a48 48 0 1196 0 48 48 0 01-96 0zm54-30a6 6 0 10-12 0 6 6 0 0012 0zm-6 60c6.619 0 12-5.381 12-12 0-3.263-1.294-6.206-3.394-8.362l12.019-27.32c.994-2.268-.037-4.93-2.306-5.924-2.269-.994-4.931.037-5.925 2.306L48.356 54H48c-6.619 0-12 5.381-12 12s5.381 12 12 12zM33 27a6 6 0 10-12 0 6 6 0 0012 0zM18 54a6 6 0 100-12 6 6 0 000 12zm66-6a6 6 0 10-12 0 6 6 0 0012 0z"></path>
      </g>
    </svg>
  )
}

export const Feathers = ({ className }: IllustrationProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="96"
      height="96"
      className={className}
      fill="currentColor"
      viewBox="0 0 96 96"
    >
      <path d="M52.219 40.425L4.313 88.313c-1.763 1.762-1.763 4.612 0 6.356 1.762 1.743 4.612 1.762 6.356 0L21.356 83.98h12.75c9.32 0 18.357-2.7 26.063-7.687 2.081-1.35 1.031-4.313-1.463-4.313a1.72 1.72 0 01-1.725-1.725c0-.769.507-1.425 1.22-1.65l15.187-4.556c.468-.15.9-.394 1.256-.75l4.2-4.2c1.894-1.894.544-5.119-2.119-5.119h-6.037a1.72 1.72 0 01-1.725-1.725c0-.769.506-1.425 1.218-1.65l21-6.3a2.844 2.844 0 001.744-1.444C94.95 38.925 96 34.52 96 30a28.98 28.98 0 00-8.494-20.494l-1.03-1.031A28.965 28.965 0 0066 0a28.98 28.98 0 00-20.494 8.494L26.063 27.938c-9 9-14.063 21.206-14.063 33.937v10.369l35.55-35.532a3.01 3.01 0 014.238 0 2.986 2.986 0 01.412 3.713h.019z"></path>
    </svg>
  )
}

export const MagnifyingGlassChart = ({ className }: IllustrationProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="96"
      height="96"
      className={className}
      fill="currentColor"
      viewBox="0 0 96 96"
    >
      <g clipPath="url(#clip0_1_2440)">
        <path
          fill="url(#paint0_linear_1_2440)"
          d="M78 39a38.904 38.904 0 01-7.5 23.006l23.737 23.757a6.01 6.01 0 010 8.493 6.01 6.01 0 01-8.493 0L62.006 70.5C55.556 75.225 47.606 78 39 78 17.456 78 0 60.544 0 39S17.456 0 39 0s39 17.456 39 39zm-58.5 1.5v12A4.49 4.49 0 0024 57a4.49 4.49 0 004.5-4.5v-12A4.49 4.49 0 0024 36a4.49 4.49 0 00-4.5 4.5zm15-18v30A4.49 4.49 0 0039 57a4.49 4.49 0 004.5-4.5v-30A4.49 4.49 0 0039 18a4.49 4.49 0 00-4.5 4.5zm15 12v18A4.49 4.49 0 0054 57a4.49 4.49 0 004.5-4.5v-18A4.49 4.49 0 0054 30a4.49 4.49 0 00-4.5 4.5z"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1_2440"
          x1="0"
          x2="97.934"
          y1="96.014"
          y2="-1.901"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.225" stopColor="#FF4DAB"></stop>
          <stop offset="0.853" stopColor="#328FF8"></stop>
        </linearGradient>
        <clipPath id="clip0_1_2440">
          <path fill="#fff" d="M0 0H96V96H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}
