import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex size-8 items-center justify-center rounded-lg bg-mint font-display text-sm font-bold text-background">
            DA
          </span>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink">
            Datamint <span className="text-mint">Aarvix</span>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-fog transition-colors hover:bg-secondary hover:text-ink"
              activeProps={{ className: "rounded-lg px-3 py-1.5 text-sm font-medium text-mint" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-full bg-mint px-4 py-2 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Start a Project
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-line text-ink md:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile navigation" className="border-t border-line px-5 py-3 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: item.to === "/" }}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-fog hover:bg-secondary hover:text-ink"
              activeProps={{ className: "block rounded-lg px-3 py-2.5 text-sm font-medium text-mint" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-lg bg-mint font-display text-sm font-bold text-background">
              DA
            </span>
            <span className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink">
              Datamint <span className="text-mint">Aarvix</span>
            </span>
          </div>
          <p className="mt-4 max-w-[40ch] text-sm leading-relaxed text-fog">
            Modern digital products, software platforms and technology solutions that help
            businesses operate, grow and scale.
          </p>
        </div>
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">Company</div>
          <ul className="mt-3 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-fog transition-colors hover:text-mint">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">Services</div>
          <ul className="mt-3 space-y-2 text-sm text-fog">
            <li>Web & Software Development</li>
            <li>UI/UX & Mobile Apps</li>
            <li>AI, Cloud & Data Analytics</li>
            <li>E-Commerce & Social Media</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 font-mono text-xs text-fog sm:flex-row sm:px-8">
          <span>© 2026 Datamint Aarvix. All rights reserved.</span>
          <span>Building digital solutions for what's next.</span>
        </div>
      </div>
    </footer>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Datamint Aarvix" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background font-body text-foreground antialiased">
        <SiteHeader />
        <div className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </div>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
