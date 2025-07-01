"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "@/components/input/CustomInput";
import { loginSchema, LoginFormInputs } from "@/utils/validationSchema"; // Import Schema and
import styles from "./auth.module.scss";
import CustomButton from "@/components/button/CustomButton";
import { getUserData } from "@/api/user";
import { setLocalStorage } from "@/utils/storage";

export default function LoginPage() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      phone: "",
    },
  });

  const onSubmit = async () => {
    try {
      const resData = await getUserData();

      if (resData) {
        setLocalStorage("user", resData);
        router.push("/dashboard");
      }

      reset();
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h2 className={styles.title}>Login to Your Account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <CustomInput
                label="Email"
                type="email"
                id="email"
                placeholder="Enter your email"
                {...field}
                error={errors.email?.message}
              />
            )}
          />

          {/* Password field */}
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <CustomInput
                label="Password"
                type="password"
                id="password"
                placeholder="Enter your password"
                {...field}
                error={errors.password?.message}
              />
            )}
          />

          {/* Phone number field */}
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <CustomInput
                label="Phone Number"
                type="tel"
                id="phone"
                placeholder="e.g., 09123456789"
                {...field}
                error={errors.phone?.message}
              />
            )}
          />

          <CustomButton variant="primary" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Login"}
          </CustomButton>
        </form>
      </div>
    </div>
  );
}
