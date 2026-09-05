import { Search } from "lucide-react";

import { HomepageAccountActions } from "./homepage-account-actions";
import { HomepageQuickActions } from "./homepage-quick-actions";

export function HomepageCommandCenter() {

  return (
    <section className="homepage-command-center" aria-labelledby="homepage-command-title">
      <HomepageAccountActions />
      <div className="homepage-command-stack">
        <h1 className="homepage-command-title" id="homepage-command-title">
          What will you do for today?
        </h1>
        <div className="homepage-search-form" role="search">
          <label className="sr-only" htmlFor="homepage-search">
            Search workspace
          </label>
          <Search className="homepage-search-icon" aria-hidden="true" />
          <input
            className="homepage-search-input"
            id="homepage-search"
            placeholder="Search..."
            type="search"
          />
        </div>
        <HomepageQuickActions />
      </div>
    </section>
  );
}
