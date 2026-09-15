import { CommunityScreen } from "@/features/community";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community",
  description: "Explore Kelola community spaces and collaboration updates.",
};

export default function CommunityPage() {
  return <CommunityScreen />;
}
