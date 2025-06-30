import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format.")
    .required("Email cannot be empty."),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain uppercase and lowercase letters, numbers, and special characters."
    )
    .required("Password cannot be empty."),
  phone: yup
    .string()
    .matches(/^09\d{9}$/, "Invalid phone number format (e.g., 09123456789).")
    .required("Phone number cannot be empty."),
});
export type LoginFormInputs = yup.InferType<typeof loginSchema>;
