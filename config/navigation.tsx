import {
  Users,
  BarChart3,
  GitBranch,
  Code2,
  Palette,
  Building2,
  LayoutGrid,
  FileText,
  FileCheck,
  BookOpen,
  FileCog,
  Bot,
  Monitor,
  Award,
  Bell,
  Handshake,
} from "lucide-react";
import type { MegaMenuColumn } from "@/features/navigation/components/mega-menu";

export interface NavItem {
  label: string;
  href: string;
}

export const mainNavItems: NavItem[] = [
  { label: "Template", href: "#" },
  { label: "Products", href: "#" },
  { label: "Resources", href: "#" },
];

const ICON_SIZE = "size-[16px]";

export const templateMenuColumns: MegaMenuColumn[] = [
  {
    title: "Categories",
    items: [
      { label: "Collaborative Workspace", href: "#", icon: <Users className={ICON_SIZE} /> },
      { label: "Charts", href: "#", icon: <BarChart3 className={ICON_SIZE} /> },
      { label: "Flowcharts", href: "#", icon: <GitBranch className={ICON_SIZE} /> },
    ],
  },
  {
    title: "By Team / Use Cases",
    items: [
      { label: "Software Development", href: "#", icon: <Code2 className={ICON_SIZE} /> },
      { label: "Marketing & Creativity", href: "#", icon: <Palette className={ICON_SIZE} /> },
      { label: "Operations & HR", href: "#", icon: <Building2 className={ICON_SIZE} /> },
      { label: "Product Management", href: "#", icon: <LayoutGrid className={ICON_SIZE} /> },
    ],
  },
  {
    title: "Documents & Wikis",
    items: [
      { label: "Product Requirement Document", href: "#", icon: <FileText className={ICON_SIZE} /> },
      { label: "Functional Specification Document", href: "#", icon: <FileCheck className={ICON_SIZE} /> },
      { label: "Article / Blog", href: "#", icon: <BookOpen className={ICON_SIZE} /> },
      { label: "Technical Specification Document", href: "#", icon: <FileCog className={ICON_SIZE} /> },
    ],
  },
];

export const productMenuColumns: MegaMenuColumn[] = [
  {
    title: "Artificial Intelligence",
    items: [
      { label: "Kelolaku AI", href: "#", icon: <Code2 className={ICON_SIZE} /> },
      { label: "Kelolaku Automate", href: "#", icon: <Bot className={ICON_SIZE} /> },
    ],
  },
  {
    title: "Categories",
    items: [
      { label: "Collaborative Workspace", href: "#", icon: <Users className={ICON_SIZE} /> },
      { label: "Charts", href: "#", icon: <BarChart3 className={ICON_SIZE} /> },
      { label: "Flowcharts", href: "#", icon: <GitBranch className={ICON_SIZE} /> },
    ],
  },
  {
    title: "Documents & Wikis",
    items: [
      { label: "Product Requirement Document", href: "#", icon: <FileText className={ICON_SIZE} /> },
      { label: "Functional Specification Document", href: "#", icon: <FileCheck className={ICON_SIZE} /> },
      { label: "Article / Blog", href: "#", icon: <BookOpen className={ICON_SIZE} /> },
      { label: "Technical Specification Document", href: "#", icon: <FileCog className={ICON_SIZE} /> },
    ],
  },
];

export const resourceMenuColumns: MegaMenuColumn[] = [
  {
    title: "Modules",
    items: [
      { label: "FAQ", href: "#", icon: <Users className={ICON_SIZE} /> },
      { label: "App development", href: "#", icon: <Monitor className={ICON_SIZE} /> },
      { label: "Flowcharts & Mindmaps", href: "#", icon: <GitBranch className={ICON_SIZE} /> },
    ],
  },
  {
    title: "Customer Support",
    items: [
      { label: "About Us", href: "#", icon: <Code2 className={ICON_SIZE} /> },
      { label: "24 / 7 Live Agent", href: "#", icon: <Code2 className={ICON_SIZE} /> },
      { label: "Certification", href: "#", icon: <Award className={ICON_SIZE} /> },
      { label: "Latest Update", href: "#", icon: <Bell className={ICON_SIZE} /> },
      { label: "Partner", href: "#", icon: <Handshake className={ICON_SIZE} /> },
    ],
  },
];


export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Integrations", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Tutorials", href: "#" },
      { label: "Suggestion", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Partnership", href: "#" },
    ],
  },
];
