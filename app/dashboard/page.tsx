"use client";

import useAuth from "@/hooks/useAuth";
export default function DashboardPage() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <h1 style={{ textAlign: "center", marginTop: "100px" }}>
      Welcome to the Dashboard
    </h1>
  );
}
