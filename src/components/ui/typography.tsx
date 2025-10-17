import * as React from "react";

import { cn } from "@/lib/utils";

function TypographyH1({
  className,
  children,
  ...props
}: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "font-extrabold text-4xl text-center text-balance tracking-tight scroll-m-20",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

function TypographyH2({
  className,
  children,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "first:mt-0 pb-2 border-b font-semibold text-3xl tracking-tight scroll-m-20",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

function TypographyH3({
  className,
  children,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "font-semibold text-2xl tracking-tight scroll-m-20",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

function TypographyP({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("[&:not(:first-child)]:mt-6 leading-7", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export { TypographyH1, TypographyH2, TypographyH3, TypographyP };
