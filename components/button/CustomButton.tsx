// components/CustomButton.tsx
import React from "react";
import styles from "./CustomButton.module.scss";

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant: "primary" | "secondary";
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  variant,
  disabled = false,
}) => {
  const className = variant === "primary" ? styles.primary : styles.secondary;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${disabled ? styles.disabled : ""}`}>
      {children}
    </button>
  );
};

export default CustomButton;
