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
}

export const Button = ({ isDisabled, text, colorStyle, onClick }: TButton) => {
  return (
    <button
      type="button"
      className={`disabled:hover:bg-primary flex rounded-lg px-5 py-2 transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 xl:px-7 xl:py-[10px] ${colorStyle}`}
      disabled={isDisabled}
      onClick={() => onClick && onClick()}
    >
      {text}
    </button>
  )
}
