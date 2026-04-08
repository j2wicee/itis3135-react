import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function MainLayout() {
  useEffect(() => {
    const existing = document.querySelector('script[data-lint-page="true"]');
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://lint.page/kit/4d0fe3.js";
    script.type = "module";
    script.crossOrigin = "anonymous";
    script.dataset.lintPage = "true";
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
