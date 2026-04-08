/** Production Vercel hostname (no trailing slash). Override with Vite env when deploying. */
export const vercelAppUrl =
  import.meta.env.VITE_VERCEL_APP_URL ?? "https://itis3135-react.vercel.app";
