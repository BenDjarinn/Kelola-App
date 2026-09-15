import { LoginScreenFrame } from "@/features/auth";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Sign in to your Kelola account to access your projects, templates, and team collaboration tools.",
};

export default function LoginPage() {
  return (
    <LoginScreenFrame />
  );
}
