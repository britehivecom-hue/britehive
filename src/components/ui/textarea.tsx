import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-28 w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-foreground outline-none transition-[box-shadow,border-color] duration-150 placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-ring/70 disabled:opacity-40",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
