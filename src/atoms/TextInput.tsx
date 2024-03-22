export type TTextInput = {
  placeholder: string;
  isDisabled?: boolean;
};

export default function TextInput({
  placeholder,
  isDisabled = false,
}: TTextInput) {
  return (
    <input
      className="rounded-lg border border-light bg-light px-4 py-3 text-dark transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent-dark focus:ring-opacity-50"
      type="text"
      placeholder={placeholder}
      disabled={isDisabled}
    />
  );
}
