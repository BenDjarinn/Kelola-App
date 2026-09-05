import { AuthShowcasePanel } from "./auth-showcase-panel";

import type { ReactNode } from "react";

interface AuthScreenFrameProps {
  children: ReactNode;
}

export function AuthScreenFrame({ children }: AuthScreenFrameProps) {

  return (
    <section className="flex min-h-screen w-full bg-auth-bg px-auth-page-x py-auth-page-y">
      <div className="auth-screen-frame">
        <AuthShowcasePanel />
        <div className="auth-form-panel">
          {children}
        </div>
      </div>
    </section>
  );
}
