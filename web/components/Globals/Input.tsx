interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-bold text-lg">{label}</label>
      <input
        {...props}
        className="w-full border border-black rounded-lg p-1 focus:outline-1 focus:outline-offset-1"
      />
    </div>
  );
};
