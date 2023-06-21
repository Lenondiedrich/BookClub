interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
}

export default function Button({
  className = "",
  variant,
  children,
  ...props
}: ButtonProps) {
  const buttonStyle = {
    primary:
      "bg-iceBlue w-[150px] rounded-md py-1 text-white text-lg font-semibold active:scale-90 disabled:bg-gray-400 disabled:active:scale-100",
    secondary:
      "w-[150px] border-2 border-iceBlue text-iceBlue text-lg font-semibold py-1 rounded-md active:scale-90",
  };
  return (
    <button className={`${buttonStyle[variant]}`} {...props}>
      {children}
    </button>
  );
}
