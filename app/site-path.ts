/** Keep ordinary Sites paths and GitHub project-page paths in sync. */
export const sitePath = (path: string) =>
  `${process.env.GITHUB_PAGES === "true" ? "/cangxiaoyun" : ""}${path}`;
