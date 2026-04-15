// Brand SVGs kept intentionally — lucide-react does not include trademark brand icons

interface Social {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const SOCIALS: Social[] = [
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-white/[0.06] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <img src="/images/logo.svg" alt="Bitflosoft" className="w-6 h-8 object-contain" />
        </div>

        {/* Copyright */}
        <p className="text-xs text-zinc-400 dark:text-zinc-600 text-center order-last md:order-none">
          © {new Date().getFullYear()} Bitflosoft. All rights reserved.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-5">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-700 dark:text-zinc-600 dark:hover:text-zinc-300 transition-colors duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
