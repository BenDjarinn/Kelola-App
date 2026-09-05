import { HomepageCommandCenter } from "./homepage-command-center";
import { HomepageSidebar } from "./homepage-sidebar";

export function HomepageShell() {

  return (
    <div className="homepage-shell">
      <HomepageSidebar />
      <main className="homepage-content">
        <HomepageCommandCenter />
      </main>
    </div>
  );
}
