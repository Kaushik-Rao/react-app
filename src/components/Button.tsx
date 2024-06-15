import { ReactNode } from "react";


interface Props {
  children: ReactNode;
  color?: "primary" | "secondary";
  onClick: () => void;
}

const Button = ({ children, color = "secondary", onClick }: Props) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
