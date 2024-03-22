export type TTextInput = {
  placeholder: string;
  isDisabled?: boolean;
}

export default function TextInput({placeholder, isDisabled = false}: TTextInput) {
  return (
    <input
      className="px-4 py-3 bg-light text-dark border border-light rounded-lg focus:ring-2 focus:ring-accent-dark focus:ring-opacity-50 focus:outline-none transition-all duration-300 ease-in-out"
      type="text"
      placeholder={placeholder}
      disabled={isDisabled}
    />
  )
}
