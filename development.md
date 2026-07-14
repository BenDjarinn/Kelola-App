# Development Standards

## Tech Stack

- Use shadcn/ui, Radix UI, Tailwind CSS, and TypeScript as the primary UI stack
- Use T3 Stack related tools when necessary (tRPC, Prisma, NextAuth, etc.)
- Use **Framer Motion** for lightweight and declarative animations
- Use **GSAP** for complex, high-performance, or timeline-based animations
- Always consult context7 and exa for the most up-to-date documentation for every framework used
- **Always write code following industries/big companies best practice conventions** — no shortcuts, no assumptions, no lazy patterns. Every component, hook, and utility must pass an enterprise code audit.

---

## Component Architecture — Atomic Design

All UI components live inside `components/` and follow **Atomic Design** principles. Raw shadcn output goes into `components/ui/` (never edit these files directly — treat them as a vendor layer).

```
components/
├── ui/               # shadcn-generated output — DO NOT edit
│   ├── button.tsx
│   ├── input.tsx
│   └── ...
├── atoms/            # Smallest, stateless primitives
│   ├── icon-button.tsx
│   ├── status-badge.tsx
│   └── avatar.tsx
├── molecules/        # Composed atoms with single responsibility
│   ├── form-field.tsx
│   ├── search-bar.tsx
│   └── user-card.tsx
└── organisms/        # Feature-complete, context-aware sections
    ├── site-header.tsx
    ├── data-table.tsx
    └── auth-form.tsx
```

### Layer Definitions

**Atoms** — single-purpose wrappers or extensions of shadcn primitives. No business logic, no data fetching. Accept only typed, explicit props.

```tsx
// components/atoms/status-badge.tsx
import { Badge } from "@/components/ui/badge";
import type { BadgeProps } from "@/components/ui/badge";

type Status = "active" | "inactive" | "pending";

const statusConfig: Record<Status, { label: string; variant: BadgeProps["variant"] }> = {
  active:   { label: "Active",   variant: "default"     },
  inactive: { label: "Inactive", variant: "secondary"   },
  pending:  { label: "Pending",  variant: "outline"     },
};

interface StatusBadgeProps {
  status: Status;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const { label, variant } = statusConfig[status];
  return <Badge variant={variant}>{label}</Badge>;
}
```

**Molecules** — combine two or more atoms into a reusable, focused unit. May hold local UI state (e.g. open/closed), but no server data.

```tsx
// components/molecules/form-field.tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export function FormField({
  id, label, error, type = "text", placeholder, value, onChange,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="text-sm text-destructive">{error}</p>
      )}
    </div>
  );
}
```

**Organisms** — self-contained, feature-level sections. Can fetch data, hold complex state, and compose multiple molecules. Each organism owns one clear domain (auth, navigation, data display, etc.).

```tsx
// components/organisms/auth-form.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/molecules/form-field";

interface AuthFormProps {
  onSubmit: (email: string, password: string) => Promise<void>;
}

export function AuthForm({ onSubmit }: AuthFormProps) {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading]   = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await onSubmit(email, password);
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <FormField id="email"    label="Email"    type="email"    value={email}    onChange={setEmail} />
      <FormField id="password" label="Password" type="password" value={password} onChange={setPassword} />
      <Button onClick={handleSubmit} disabled={loading}>
        {loading ? "Signing in…" : "Sign In"}
      </Button>
    </div>
  );
}
```

### Rules

1. **Import direction is strictly downward** — organisms import molecules, molecules import atoms; never the reverse.
2. **Never import from `components/ui/` inside a page** — always go through an atom or molecule wrapper.
3. **Each component file exports one named component** (no default exports, no barrel re-exports of unrelated components).
4. **Props must be fully typed** — no `any`, no implicit `React.FC` wrapper. Use explicit `interface` or `type` per component.

---

## Animation Strategy

Two-library system: Framer Motion for declarative interactions, GSAP for timeline/scroll-driven work. Never apply both to the same element.

### Framer Motion — use for

- Enter/exit transitions (`opacity`, `y`, `scale`) and `AnimatePresence`
- Layout animations (`layout` prop)
- Hover/tap micro-interactions (`whileHover`, `whileTap`)
- Staggered list/grid reveals (`variants` + `staggerChildren`)
- Simple scroll-triggered reveals (`whileInView`)

```tsx
// ✅ Framer Motion — staggered list reveal
import { motion } from "framer-motion";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item      = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

<motion.ul variants={container} initial="hidden" animate="show">
  {items.map((i) => (
    <motion.li key={i.id} variants={item}>{i.label}</motion.li>
  ))}
</motion.ul>
```

### GSAP — use for

- Multi-step sequenced timelines (`gsap.timeline()`)
- Scroll-driven animations with scrubbing or pinning (`ScrollTrigger`)
- SVG path drawing and shape morphing
- Parallax layers and hero cinematic sequences
- Text character/word splitting (`SplitText`)
- Counter/number roll-ups
- Canvas or WebGL sync

```tsx
// ✅ GSAP — ScrollTrigger timeline
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top top", end: "+=600", scrub: true, pin: true },
      })
        .from(".hero-title", { opacity: 0, y: 80, duration: 1 })
        .from(".hero-sub",   { opacity: 0, y: 40, duration: 0.8 }, "-=0.4")
        .from(".hero-cta",   { opacity: 0, scale: 0.9, duration: 0.6 }, "-=0.3");
    }, ref);

    return () => ctx.revert(); // always clean up
  }, []);

  return <div ref={ref}>...</div>;
}
```

### Decision Matrix

| Scenario | Use |
|---|---|
| Fade in on mount | Framer Motion |
| Hover / tap feedback | Framer Motion |
| Modal open/close | Framer Motion |
| Staggered list reveal | Framer Motion |
| Layout shift animation | Framer Motion |
| Hero cinematic sequence | GSAP |
| Scroll-pinned section | GSAP |
| SVG path draw | GSAP |
| Parallax layers | GSAP |
| Timeline with 3+ steps | GSAP |
| Text character animation | GSAP |
| Counter roll-up | GSAP |

### Coexistence Rules

1. **Never animate the same element with both libraries.**
2. **GSAP owns scroll-driven animations** — don't use Framer Motion's `useScroll` for pinning or scrubbing.
3. **Framer Motion owns component lifecycle** — use `AnimatePresence` for mount/unmount, not GSAP.
4. **Register GSAP plugins at module level**, not inside components.
5. **Respect `prefers-reduced-motion`**:
   - Framer Motion: `useReducedMotion()` hook
   - GSAP: check `window.matchMedia("(prefers-reduced-motion: reduce)")` and skip or scale timelines

---

## Code Quality

### Type Safety

- **No `any`** — use `unknown` with type narrowing, or explicit generics.
- All props use named `interface` or `type` definitions — never inline anonymous objects.
- Use `satisfies` where you need inference without widening; use `as const` for literal enums and config maps.
- Server actions and API routes must be typed end-to-end (tRPC procedures or zod-validated `fetch`).

```ts
// ✅ Typed config map with satisfies
const ROLE_LABELS = {
  admin:  "Administrator",
  member: "Member",
  guest:  "Guest",
} satisfies Record<string, string>;
```

### Maintainability & Scalability

- **One concern per file** — a component, a hook, a util. No god files.
- Extract repeated logic into custom hooks (`hooks/use-*.ts`) and pure utils (`lib/`).
- Co-locate test files: `component.tsx` → `component.test.tsx` in the same folder.
- Feature-level code (forms, tables, dashboards) lives in `features/<name>/` and is imported into pages, never the other way around.

```
features/
├── auth/
│   ├── hooks/
│   ├── components/
│   └── schema.ts      # zod validation
├── dashboard/
└── settings/
```

### Clean Code Checklist

- Functions do one thing; if you need "and" to describe it, split it.
- No commented-out code in commits — use git history.
- Prefer explicit over clever: readable in 6 months > smart today.
- Environment variables are typed via a validated `env.ts` (e.g. `@t3-oss/env-nextjs`).

---

## Quality Requirements

### Responsive Design
- Fully responsive from 320 px to 2560 px+
- Test at mobile, tablet, and desktop breakpoints

### Accessibility
- Full keyboard navigation; visible focus indicators
- Semantic HTML with correct ARIA attributes
- WCAG 2.1 AA color contrast minimum
- `prefers-reduced-motion` respected in all animations

### Dark Mode
- Tailwind `dark:` utilities or a theme provider
- All shadcn components verified in both themes

### SEO
- Correct heading hierarchy, meta tags, and semantic HTML
- Open Graph and Twitter Card meta tags where appropriate
- Next.js Metadata API for all SEO configuration

### Performance
- Lazy-load GSAP plugins (use dynamic imports client-side)
- Next.js `<Image>` for all images
- Code-split at the route level; avoid unnecessary dependencies
- Minimize bundle size — audit with `@next/bundle-analyzer` when in doubt


---

## Enterprise Code Conventions

All code in this project must follow enterprise-grade conventions aligned with industry standards (Google, Airbnb, Vercel, Feature-Sliced Design). These are non-negotiable.

### Naming Conventions

| Item | Convention | Example |
|---|---|---|
| React components | `PascalCase` | `UserProfileCard` |
| Component files | `kebab-case.tsx` | `user-profile-card.tsx` |
| Hook files | `use-xxx.ts` (kebab-case with `use` prefix) | `use-auth.ts` |
| Hook identifiers | `camelCase` with `use` prefix | `useAuth` |
| Variables, functions, parameters | `camelCase` | `fetchUserProfile`, `isLoading` |
| Constants (module-level) | `UPPER_SNAKE_CASE` | `MAX_RETRY_COUNT` |
| Interfaces (component props) | `PascalCase` ending with `Props` | `NavLinkProps` |
| Types (everything else) | `PascalCase` | `UserRole`, `ApiResponse` |
| Directories (bucket/categorical) | lowercase plural noun | `hooks/`, `components/`, `services/` |
| Directories (feature modules) | `kebab-case` | `features/auth/`, `features/navigation/` |
| Config files | `kebab-case` | `site.ts`, `navigation.ts` |
| Boolean variables | prefixed with `is`, `has`, `should`, `can` | `isLoading`, `hasError` |
| Callback props | prefixed with `on` | `onSubmit`, `onChange` |

### Export Rules

- **Use named exports** — no default exports except where Next.js requires them (page, layout, route files).
- Every feature directory must have a barrel `index.ts` that defines the public API.
- Barrel files must only re-export — no business logic inside.
- Never import from deep internals of another feature; always go through its `index.ts`.

### Component Rules

- **One component per file** — no exceptions.
- **Props typed with a named `interface`** — never inline anonymous objects.
- **No prop spreading onto DOM** — pass props explicitly unless wrapping a native HTML element.
- **No `React.FC`** — use explicit function declarations with typed props.
- **No business logic in JSX** — extract to functions or hooks.
- **No data fetching in components** — extract to custom hooks or server-side loaders.
- **No `useEffect` for data fetching** — use React Query, SWR, or server components.

### Component Internal Order

Inside every component, follow this order strictly:

1. Hooks (`useState`, `useEffect`, custom hooks)
2. Local variables and derived values
3. `useEffect` hooks (side effects)
4. Event handlers and functions
5. Return statement (JSX) — always preceded by a blank line

### Component File Structure

Every React component file must follow this exact top-to-bottom order:

```tsx
// 1. "use client" directive (only if needed)
"use client";

// 2. External library imports
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// 3. Internal/project imports (blank line separating from external)
import { mainNavItems } from "@/config/navigation";
import { MegaMenu } from "./mega-menu";

// 4. Type-only imports (separate with import type)
import type { NavItem } from "@/config/navigation";

// 5. Interfaces/types for this component
interface NavbarProps {
  isTransparent?: boolean;
}

// 6. Constants, variants, config objects (outside the component)
const TRIGGER_CLASS = "flex items-center gap-[4px] text-[16px]";

const animationVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
} as const;

// 7. Named export function (no React.FC, no default export)
export function Navbar({ isTransparent = false }: NavbarProps) {
  // A. Hooks first
  const [isOpen, setIsOpen] = useState(false);

  // B. Derived values
  const bgClass = isTransparent ? "bg-transparent" : "bg-[--color-nav-bg]";

  // C. Event handlers (named functions, not inline arrows)
  function handleToggle() {
    setIsOpen((prev) => !prev);
  }

  // D. Blank line before return — always
  return (
    <header>...</header>
  );
}
```

This structure is mandatory for every component — no exceptions.

### File & Folder Rules

- **Feature-first organization** — code belongs in `features/<name>/` organized by domain, not by file type.
- **Colocation** — hooks, components, types, and tests for a feature live together.
- **No cross-feature imports** — features never import from another feature's internals. Share via `shared/` or `components/`.
- **Shared code has zero knowledge of features** — `lib/`, `config/`, `components/ui/`, and `hooks/` never import from `features/`.
- **Import direction is one-way**: pages → features → shared. Never the reverse.

### Design Tokens & Styling

- **No magic color/spacing values in component code** — all colors, gradients, and spacing must reference CSS variables or Tailwind theme tokens.
- **No inline `style` objects** — use Tailwind utilities or CSS variables referenced via Tailwind's arbitrary value syntax (e.g., `bg-[--color-nav-bg]`).
- **Design tokens live in `globals.css`** under `@theme inline` or `:root`.

### Data & Configuration

- **Separate data from presentation** — static config (nav items, site metadata, feature flags) lives in `config/`, not inside component files.
- **Environment variables validated with Zod** — use `@t3-oss/env-nextjs` or equivalent.
- **No hardcoded strings for routes** — use a centralized route map in `config/`.

### Server/Client Boundary

- **Default to Server Components** — only add `"use client"` when interactivity is required.
- **Push `"use client"` as far down the tree as possible** — keep interactive components as leaf nodes.
- **Never import server-only code in client components** — use the `server-only` package for sensitive modules.
- **Server Actions are thin** — validate input, call a service, return result. No business logic inside actions.

### Testing Convention

- Co-locate tests: `component.tsx` → `component.test.tsx` in the same folder.
- Test behavior, not implementation — query by role, label, or accessible text.
- No snapshot tests — they become stale and don't verify behavior.
- Run accessibility checks (axe-core) in component tests.

### Comments & Documentation

- Code should be self-explanatory — avoid unnecessary comments.
- Only document "why", not "what" the code does.
- Use `// TODO:` for tracking future work.
- No commented-out code in commits — use git history.

### Forbidden Patterns

- ❌ `any` type — use `unknown` with type narrowing
- ❌ `useEffect` for data fetching — use server components or React Query
- ❌ Direct DOM manipulation — use refs only when no React alternative exists
- ❌ Inline styles for layout — use Tailwind or design tokens
- ❌ Business logic in JSX — extract to functions or hooks
- ❌ Cross-feature imports — share via barrel exports or shared layer
- ❌ `React.FC` wrapper — use explicit function declarations
- ❌ Default exports (except Next.js page/layout/route files)
- ❌ Prop spreading onto DOM elements (unless wrapping native elements)
- ❌ Global state for feature-specific data — use local state or feature hooks
