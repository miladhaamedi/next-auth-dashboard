import React from "react";
import styles from "./CustomInput.module.scss";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, id, error, ...rest }, ref) => {
    return (
      <div className={styles.formGroup}>
        <label htmlFor={id} className={styles.label}>
          {label}:
        </label>
        <input
          id={id}
          ref={ref}
          className={`${styles.input} ${error ? styles.inputError : ""}`}
          {...rest}
        />
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
