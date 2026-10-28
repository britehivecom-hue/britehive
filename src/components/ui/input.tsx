import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-md border border-border bg-card px-3 text-sm text-foreground outline-none transition-[box-shadow,border-color] duration-150 placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-ring/70 disabled:opacity-40",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
