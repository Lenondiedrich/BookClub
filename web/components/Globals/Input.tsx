interface InputProps {
  label: string;
  type:
    | "button"
    | "checkbox"
    | "date"
    | "email"
    | "number"
    | "password"
    | "radio"
    | "text"
    | "search"
    | "submit";
}

export const Input = ({ label, type }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-bold text-lg">{label}</label>
      <input
        type={type}
        className="w-full border border-black rounded-lg p-1 focus:outline-1 focus:outline-offset-1"
      />
    </div>
  );
};
