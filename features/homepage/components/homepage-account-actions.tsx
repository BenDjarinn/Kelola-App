"use client";

import { useEffect, useRef, useState } from "react";
import { Crown } from "lucide-react";

import { HomepageUpgradeModal } from "./homepage-upgrade-modal";

const UPGRADE_CLICK_FEEDBACK_DURATION_MS = 420;

function getUpgradeButtonClassName(isUpgradeFeedbackVisible: boolean) {
  return isUpgradeFeedbackVisible
    ? "homepage-upgrade-button homepage-upgrade-button-clicked"
    : "homepage-upgrade-button";
}

export function HomepageAccountActions() {
  const [isUpgradeFeedbackVisible, setIsUpgradeFeedbackVisible] = useState(false);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const upgradeFeedbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const upgradeButtonClassName = getUpgradeButtonClassName(isUpgradeFeedbackVisible);

  useEffect(() => {
    return () => {
      if (upgradeFeedbackTimerRef.current) {
        clearTimeout(upgradeFeedbackTimerRef.current);
      }
    };
  }, []);

  function handleUpgradeClick() {
    setIsUpgradeFeedbackVisible(true);
    setIsUpgradeModalOpen(true);

    if (upgradeFeedbackTimerRef.current) {
      clearTimeout(upgradeFeedbackTimerRef.current);
    }

    upgradeFeedbackTimerRef.current = setTimeout(() => {
      setIsUpgradeFeedbackVisible(false);
    }, UPGRADE_CLICK_FEEDBACK_DURATION_MS);
  }

  function handleUpgradeModalClose() {
    setIsUpgradeModalOpen(false);
  }

  return (
    <>
      <div className="homepage-account-actions" aria-label="Account actions">
        <button className={upgradeButtonClassName} onClick={handleUpgradeClick} type="button">
          <span>Upgrade Plan</span>
          <Crown className="homepage-upgrade-icon" aria-hidden="true" />
        </button>
      </div>
      {isUpgradeModalOpen && <HomepageUpgradeModal onClose={handleUpgradeModalClose} />}
    </>
  );
}
