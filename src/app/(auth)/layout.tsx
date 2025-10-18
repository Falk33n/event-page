import type { ReactNode } from "react";

type AuthLayoutProps = {
  /** Child components to render within the layout. */
  children: ReactNode;
};

export default async function AuthLayout({ children }: AuthLayoutProps) {
  return <>{children}</>;
}
