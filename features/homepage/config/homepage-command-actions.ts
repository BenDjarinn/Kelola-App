export type HomepageCommandActionId =
  | "templates"
  | "software-development"
  | "marketing-creativity"
  | "operations-hr"
  | "product-management"
  | "documents"
  | "article-blog"
  | "more";

export type HomepageCommandActionIcon =
  | "templates"
  | "software"
  | "marketing"
  | "operations"
  | "product"
  | "documents"
  | "article"
  | "more";

export interface HomepageCommandAction {
  icon: HomepageCommandActionIcon;
  id: HomepageCommandActionId;
  label: string;
}

export const homepageCommandActions: HomepageCommandAction[] = [
  {
    icon: "templates",
    id: "templates",
    label: "Templates",
  },
  {
    icon: "software",
    id: "software-development",
    label: "Software Development",
  },
  {
    icon: "marketing",
    id: "marketing-creativity",
    label: "Marketing & Creativity",
  },
  {
    icon: "operations",
    id: "operations-hr",
    label: "Operations & HR",
  },
  {
    icon: "product",
    id: "product-management",
    label: "Product Management",
  },
  {
    icon: "documents",
    id: "documents",
    label: "Documents",
  },
  {
    icon: "article",
    id: "article-blog",
    label: "Article / Blog",
  },
  {
    icon: "more",
    id: "more",
    label: "More",
  },
];

export const defaultHomepageCommandActionId = homepageCommandActions[0].id;
