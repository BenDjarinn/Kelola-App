"use client";

import { useState } from "react";

import { homepageCommandActions } from "../config/homepage-command-actions";
import { HomepageQuickActionButton } from "./homepage-quick-action-button";

import type { HomepageCommandActionId } from "../config/homepage-command-actions";

export function HomepageQuickActions() {
  const [selectedActionId, setSelectedActionId] =
    useState<HomepageCommandActionId>("marketing-creativity");

  function handleActionSelect(actionId: HomepageCommandActionId) {
    setSelectedActionId(actionId);
  }

  return (
    <div className="homepage-quick-actions" aria-label="Quick actions">
      {homepageCommandActions.map((action) => (
        <HomepageQuickActionButton
          action={action}
          isSelected={selectedActionId === action.id}
          key={action.id}
          onSelect={handleActionSelect}
        />
      ))}
    </div>
  );
}
