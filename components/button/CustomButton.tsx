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
  let finalClassName = styles.button;

  if (variant === "primary") {
    finalClassName += ` ${styles.buttonPrimary}`;
  } else if (variant === "secondary") {
    finalClassName += ` ${styles.buttonSecondary}`;
  }

  if (disabled) {
    finalClassName += `${styles.disabled}`;
  }

  return (
    <button onClick={onClick} disabled={disabled} className={finalClassName}>
      {children}
    </button>
  );
};

export default CustomButton;
