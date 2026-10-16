/** Shared deployment path for Sites and GitHub Pages. */
export const sitePath=(path:string)=>`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
