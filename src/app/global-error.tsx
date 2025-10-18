"use client";

import * as Sentry from "@sentry/nextjs";
import type { Metadata } from "next";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "Global Error",
  description: "A global error occurred while rendering the page.",
};

export default function GlobalError({
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
    <html>
      <body>
        {/* <div className="flex justify-center items-center bg-gradient-to-br from-slate-50 to-slate-100 p-4 min-h-screen">
          <Card className="shadow-lg w-full max-w-md">
            <CardHeader className="pb-4 text-center">
              <div className="flex justify-center items-center bg-red-100 mx-auto mb-4 rounded-full w-16 h-16">
                <AlertTriangle aria-hidden className="w-8 h-8 text-red-600" />
              </div>
              <CardTitle className="font-bold text-2xl">
                Critical Error
              </CardTitle>
              <CardDescription>
                A critical error occurred that prevented the application from
                loading properly.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {process.env.NODE_ENV === "development" && (
                <div className="bg-slate-100 p-3 rounded text-sm">
                  <strong>Error:</strong> {error.message}
                  {error.digest && (
                    <div className="mt-1 text-slate-600 text-xs">
                      ID: {error.digest}
                    </div>
                  )}
                </div>
              )}

              <Button onClick={reset} className="w-full" size="lg">
                <RefreshCw aria-hidden className="mr-2 w-4 h-4" />
                Try Again
              </Button>
            </CardContent>
          </Card>
        </div> */}
      </body>
    </html>
  );
}
