import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-16 md:flex-row md:py-0">
        <div className="text-sm text-muted-foreground">&copy; 2025 All rights reserved to AI Analytics Suite</div>
        <div className="text-sm">
          Made by{" "}
          <Link
            href="https://www.x.com/suyash_xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            Suyash
          </Link>
        </div>
      </div>
    </footer>
  )
}

