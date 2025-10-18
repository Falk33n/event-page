"use client";

import * as Sentry from "@sentry/nextjs";
import type { Metadata } from "next";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "Error",
  description: "A error occurred while rendering the page.",
};

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    document.title = `${error.digest} | ${error.name}`;
    Sentry.captureException(error);
  }, [error]);

  return (
    <></>
    /*   <div className="bg-gradient-to-br from-background via-background to-primary/5 min-h-screen">
      <div className="mx-auto px-4 py-8 container">
        <div className="items-center gap-8 grid lg:grid-cols-2 min-h-[calc(100vh-4rem)]">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <CheckCircle aria-hidden className="w-8 h-8 text-primary" />
              <span className="font-bold text-2xl">Todos</span>
            </div>

            <Card className="shadow-lg border-0">
              <CardHeader className="pb-4 text-center">
                <div className="flex justify-center items-center bg-destructive/10 mx-auto mb-4 rounded-full w-16 h-16">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                </div>
                <CardTitle className="font-bold text-3xl">
                  Oops! Something went wrong
                </CardTitle>
                <CardDescription className="text-lg">
                  We encountered an unexpected error while processing your
                  request.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {process.env.NODE_ENV === "development" && (
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="mb-2 font-semibold text-sm">
                      Error Details (Development Only):
                    </h4>
                    <p className="font-mono text-muted-foreground text-sm break-all">
                      {error.message}
                    </p>
                    {error.digest && (
                      <p className="mt-2 text-muted-foreground text-xs">
                        Error ID: {error.digest}
                      </p>
                    )}
                  </div>
                )}

                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Don&apos;t worry! This happens sometimes. You can try
                    refreshing the page or go back to the homepage.
                  </p>

                  <div className="flex sm:flex-row flex-col gap-3">
                    <Button onClick={reset} className="flex-1 h-11" size="lg">
                      <RefreshCw className="mr-2 w-4 h-4" />
                      Try Again
                    </Button>

                    <Link
                      href="/"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "lg" }),
                        "h-11 flex-1",
                      )}
                    >
                      <Home aria-hidden className="mr-2 w-4 h-4" />
                      Go Home
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="flex justify-center items-center bg-gradient-to-br from-primary/20 to-primary/5 rounded-full w-80 h-80">
                <div className="flex justify-center items-center bg-gradient-to-br from-primary/30 to-primary/10 rounded-full w-64 h-64">
                  <div className="flex justify-center items-center bg-gradient-to-br from-primary/40 to-primary/20 rounded-full w-48 h-48">
                    <AlertTriangle
                      aria-hidden
                      className="w-24 h-24 text-primary/60"
                    />
                  </div>
                </div>
              </div>

              <div
                className="-top-4 -right-4 absolute bg-primary/20 rounded-full w-8 h-8 animate-bounce"
                style={{ animationDelay: "0s" }}
              />
              <div
                className="-bottom-4 -left-4 absolute bg-primary/30 rounded-full w-6 h-6 animate-bounce"
                style={{ animationDelay: "0.5s" }}
              />
              <div
                className="top-1/2 -left-8 absolute bg-primary/25 rounded-full w-4 h-4 animate-bounce"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div> */
  );
}
