"use client";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | Page not found",
};

export default function NotFound() {
  /* const router = useRouter(); */

  return (
    <></>
    /*     <div className="bg-gradient-to-br from-background via-background to-primary/5 min-h-screen">
      <div className="mx-auto px-4 py-8 container">
        <div className="items-center gap-8 grid lg:grid-cols-2 min-h-[calc(100vh-4rem)]">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <CheckCircle aria-hidden className="w-8 h-8 text-primary" />
              <span className="font-bold text-2xl">Todos</span>
            </div>

            <Card className="shadow-lg border-0">
              <CardHeader className="pb-4 text-center">
                <div className="flex justify-center items-center bg-primary/10 mx-auto mb-4 rounded-full w-16 h-16">
                  <Search aria-hidden className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-bold text-3xl">
                  Page Not Found
                </CardTitle>
                <CardDescription className="text-lg">
                  The page you&apos;re looking for doesn&apos;t exist or has
                  been moved.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="mb-4 font-bold text-primary/20 text-8xl">
                    404
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground text-center">
                    Don&apos;t worry! Let&apos;s get you back on track with your
                    tasks.
                  </p>

                  <div className="flex sm:flex-row flex-col gap-3">
                    <Button asChild className="flex-1 h-11" size="lg">
                      <Link href="/">
                        <Home aria-hidden className="mr-2 w-4 h-4" />
                        Go Home
                      </Link>
                    </Button>

                    <Button
                      variant="outline"
                      onClick={() => router.back()}
                      className="flex-1 h-11"
                      size="lg"
                    >
                      <ArrowLeft aria-hidden className="mr-2 w-4 h-4" />
                      Go Back
                    </Button>
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
                    <div className="font-bold text-primary/60 text-6xl">
                      404
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="-top-4 -right-4 absolute flex justify-center items-center bg-primary/20 rounded-full w-8 h-8 animate-bounce"
                style={{ animationDelay: "0s" }}
              >
                <Search aria-hidden className="w-4 h-4 text-primary/60" />
              </div>
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
