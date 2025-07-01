"use client";

import LoadingSpinner from "@/components/spinner/LoadingSpinner";
import useAuth from "@/hooks/useAuth";
export default function DashboardPage() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <LoadingSpinner />;
  }

  return (
    <h1 style={{ textAlign: "center", marginTop: "100px" }}>
      Welcome to the Dashboard
    </h1>
  );
}
