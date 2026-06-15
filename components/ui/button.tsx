import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "coral" | "glass";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-foreground text-background hover:bg-foreground/90": variant === "default",
            "border border-border bg-transparent hover:bg-muted text-foreground": variant === "outline",
            "hover:bg-muted text-foreground": variant === "ghost",
            "bg-[var(--color-coral)] text-white hover:bg-[var(--color-coral-dark)] shadow-[0_0_15px_rgba(255,92,115,0.3)]": variant === "coral",
            "glass text-foreground hover:bg-white/10": variant === "glass",
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-11 rounded-md px-8 text-base": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
