import { AppRouteShell } from "@/features/app-shell";
import { HomepageCommandCenter } from "./homepage-command-center";

export function HomepageShell() {
  return (
    <AppRouteShell activeNavigationId="home">
      <HomepageCommandCenter />
    </AppRouteShell>
  );
}
