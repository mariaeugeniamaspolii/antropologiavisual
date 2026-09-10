import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors",
  {
    variants: {
      variant: {
        default:
          "border border-border text-muted-foreground",
        accent:
          "border border-border text-accent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), "rounded-sm", className)}
      style={{
        fontSize: 'var(--text-nav)',
        padding: '6px 14px',
      }}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
