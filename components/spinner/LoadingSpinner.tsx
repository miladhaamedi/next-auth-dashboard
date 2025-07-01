// components/LoadingSpinner/LoadingSpinner.tsx
import React from "react";
import styles from "./LoadingSpinner.module.scss";

interface LoadingSpinnerProps {
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message }) => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
      {message && <p className={styles.spinnerMessage}>{message}</p>}
    </div>
  );
};

export default LoadingSpinner;
