import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "coral";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "border-transparent bg-foreground text-background hover:bg-foreground/80": variant === "default",
          "border-transparent bg-muted text-foreground hover:bg-muted/80": variant === "secondary",
          "text-foreground border-border": variant === "outline",
          "border-transparent bg-[var(--color-coral)]/10 text-[var(--color-coral)] border border-[var(--color-coral)]/20": variant === "coral",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
