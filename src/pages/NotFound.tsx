import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Map } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="relative w-full max-w-lg px-6">
        {/* Decorative elements */}
        <div className="absolute -top-8 -left-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl"></div>
        <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl"></div>

        <div className="relative space-y-8 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-8 shadow-xl dark:border-slate-700 dark:bg-slate-800/80 sm:p-12">
          {/* Size indicator */}
          <div className="flex justify-center">
            <div className="inline-flex items-center justify-center">
              <div className="text-8xl font-bold bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent">
                404
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              Lost in the Jungle?
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Looks like you've wandered off the beaten path. The page you're searching for doesn't exist in our travel guide.
            </p>
          </div>

          {/* Path info */}
          <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-700/50">
            <p className="text-sm font-mono text-slate-600 dark:text-slate-400 break-all">
              Unreachable route: <span className="text-primary font-semibold">{location.pathname}</span>
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              asChild
              variant="default"
              size="lg"
              className="gap-2"
            >
              <a href="/">
                <Home className="h-5 w-5" />
                Back to Home
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <a href="/destinations">
                <Map className="h-5 w-5" />
                Explore Destinations
              </a>
            </Button>
          </div>

          {/* Quick links */}
          <div className="space-y-3 border-t border-slate-200 pt-6 dark:border-slate-700">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Quick Navigation:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <a
                href="/destinations"
                className="text-sm px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-primary/10 hover:text-primary transition-colors dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-primary/20"
              >
                Destinations
              </a>
              <a
                href="/experiences"
                className="text-sm px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-primary/10 hover:text-primary transition-colors dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-primary/20"
              >
                Experiences
              </a>
              <a
                href="/about"
                className="text-sm px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-primary/10 hover:text-primary transition-colors dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-primary/20"
              >
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
