import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <Link href="/" className="font-bold text-xl tracking-tighter">
            Nitheesh<span className="text-[var(--color-coral)]">.</span>
          </Link>
          <p className="text-sm text-muted-foreground mt-2">
            Software Engineer & Founder.
          </p>
        </div>
        
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nitheesh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
