"use client";
import CustomInput from "@/components/input/CustomInput";
import CustomButton from "@/components/button/CustomButton";

export default function AuthPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Login</h1>
      <CustomInput
        type="text"
        placeholder="Username"
        value=""
        onChange={() => {}}
      />
      <CustomInput
        type="password"
        placeholder="Password"
        value=""
        onChange={() => {}}
      />
      <CustomInput
        type="text"
        placeholder="Username"
        value=""
        onChange={() => {}}
      />
      <CustomButton onClick={() => {}} type="primary" disabled={false}>
        Login
      </CustomButton>
    </div>
  );
}
