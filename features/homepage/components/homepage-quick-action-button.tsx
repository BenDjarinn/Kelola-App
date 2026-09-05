import {
  Boxes,
  BriefcaseBusiness,
  Code2,
  FileText,
  Layers3,
  MoreHorizontal,
  Palette,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";
import type {
  HomepageCommandAction,
  HomepageCommandActionIcon,
  HomepageCommandActionId,
} from "../config/homepage-command-actions";

interface HomepageQuickActionButtonProps {
  action: HomepageCommandAction;
  isSelected: boolean;
  onSelect: (actionId: HomepageCommandActionId) => void;
}

const homepageCommandIcons: Record<HomepageCommandActionIcon, LucideIcon> = {
  templates: Boxes,
  software: Code2,
  marketing: Palette,
  operations: BriefcaseBusiness,
  product: Layers3,
  documents: FileText,
  article: FileText,
  more: MoreHorizontal,
};

function getQuickActionClassName(isSelected: boolean) {
  return isSelected
    ? "homepage-quick-action homepage-quick-action-selected"
    : "homepage-quick-action";
}

function renderCommandIcon(icon: HomepageCommandActionIcon) {
  const CommandIcon = homepageCommandIcons[icon];

  return <CommandIcon className="homepage-quick-action-icon" />;
}

export function HomepageQuickActionButton({
  action,
  isSelected,
  onSelect,
}: HomepageQuickActionButtonProps) {
  const quickActionClassName = getQuickActionClassName(isSelected);

  function handleClick() {
    onSelect(action.id);
  }

  return (
    <button
      aria-pressed={isSelected}
      className={quickActionClassName}
      onClick={handleClick}
      type="button"
    >
      <span className="homepage-quick-action-mark" aria-hidden="true">
        {renderCommandIcon(action.icon)}
      </span>
      <span className="homepage-quick-action-label">{action.label}</span>
    </button>
  );
}
