export type TButton = {
  label?: string;
}

export default function Button({label}: TButton) {
  return (
    <button className="bg-blue-400 btn">
      {label}
    </button>
  )
}
