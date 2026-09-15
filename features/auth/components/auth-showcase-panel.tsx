import Image from "next/image";

export function AuthShowcasePanel() {

  return (
    <div className="auth-showcase-panel">
      <div className="auth-showcase-art" aria-hidden="true">
        <div className="auth-dashboard-window auth-dashboard-window-top">
          <div className="auth-dashboard-body auth-dashboard-top-grid">
            <div className="auth-chart-donut-stack">
              <div className="auth-chart-donut auth-chart-donut-small">82%</div>
              <div className="auth-chart-donut auth-chart-donut-small" />
            </div>
            <div className="auth-chart-bars">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>

        <div className="auth-dashboard-window auth-dashboard-window-right">
          <div className="auth-dashboard-body auth-dashboard-right-grid">
            <div className="auth-widget-grid">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="auth-mini-chart-grid">
              <div className="auth-mini-bars auth-mini-bars-green">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="auth-mini-bars auth-mini-bars-cyan">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="auth-mini-bars auth-mini-bars-orange">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="auth-mini-bars auth-mini-bars-yellow">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="auth-mini-bars auth-mini-bars-blue">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="auth-mini-bars auth-mini-bars-red">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>

        <div className="auth-dashboard-window auth-dashboard-window-large">
          <div className="auth-dashboard-body auth-dashboard-large-grid">
            <div className="auth-widget-grid">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div>
              <div className="auth-status-row">
                <span>Task 1</span>
                <span />
              </div>
              <div className="auth-status-row">
                <span>Task 2</span>
                <span />
              </div>
              <div className="auth-status-row">
                <span>Task 3</span>
                <span />
              </div>
              <div className="auth-status-row">
                <span>Task 4</span>
                <span />
              </div>
              <div className="auth-status-row">
                <span>Task 5</span>
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="auth-showcase-logo-card" aria-hidden="true">
        <Image
          src="/assets/images/kelola-logo.svg"
          alt=""
          width={56}
          height={56}
          className="auth-showcase-logo-image"
        />
      </div>

      <div className="auth-showcase-copy">
        <h1 className="auth-showcase-title">
          A Unified Hub for
          <br />
          Smarter, Brighter Decision Thinking
        </h1>
        <p className="auth-showcase-description">
          Kelola will assist you with a unified command center that allows you to explore various
        </p>
      </div>
    </div>
  );
}
