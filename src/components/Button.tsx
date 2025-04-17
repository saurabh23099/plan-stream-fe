import React, { memo } from "react";

interface ButtonProps {
  name?: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = memo(({ name, icon, className, onClick }) => {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 rounded ${className}`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {name && <span>{name}</span>}
    </button>
  );
});

export default Button;
