import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-container px-6 py-12 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <span className="text-lg font-bold tracking-tight text-foreground">Selora</span>
            <p className="mt-1 text-sm text-muted">{SITE.tagline}</p>
          </div>

          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="focus-ring text-sm text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <span className="text-xs font-semibold">{social.label[0]}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Selora. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="focus-ring text-xs text-muted hover:text-accent">
              Privacy
            </Link>
            <Link href="/terms" className="focus-ring text-xs text-muted hover:text-accent">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
