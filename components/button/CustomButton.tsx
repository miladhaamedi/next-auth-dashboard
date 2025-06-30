// components/CustomButton.tsx
import React from "react";
import styles from "./CustomButton.module.css";

interface CustomButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type: "primary" | "secondary";
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  type,
  disabled = false,
}) => {
  const className = type === "primary" ? styles.primary : styles.secondary;

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
