interface TextProps {
  children: React.ReactNode;
  number: number;
}

export default function Text({ children, number }: TextProps) {
  return (
    <span className="text-iceBlue text-lg font-light">
      {children}
      <strong className="font-bold">{number}</strong>
    </span>
  );
}
