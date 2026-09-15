import { SupportScreen } from "@/features/support";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description: "Access Kelola support resources and service assistance.",
};

export default function SupportPage() {
  return <SupportScreen />;
}
