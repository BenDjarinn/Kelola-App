export const ROUTES = {
  home: "/",
  community: "/community",
  homepage: "/homepage",
  workspace: "/workspace",
  login: "/login",
  signUp: "/sign-up",
  support: "/support",
  forgotPassword: "/forgot-password",
  workspaceProjectDetail: (projectId: string) => `/workspace/projects/${projectId}`,
} as const;
