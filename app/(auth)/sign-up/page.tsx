import { SignUpScreenFrame } from "@/features/auth";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Create your free Kelola account and start collaborating with AI-powered planning, 10,000+ templates, and team tools.",
};

export default function SignUpPage() {
  return (
    <SignUpScreenFrame />
  );
}
