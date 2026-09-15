import { HomepageScreen } from "@/features/homepage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Your Kelola command center — manage projects, track progress, and access quick actions all in one place.",
};

export default function HomepagePage() {
  return <HomepageScreen />;
}
