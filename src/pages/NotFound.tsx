import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-background/80">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            404
          </h1>
          <p className="text-2xl font-semibold text-foreground mb-2">
            Page Not Found
          </p>
          <p className="text-muted-foreground mb-4">
            Sorry! This project is still under development or the page doesn't
            exist.
          </p>
          {location.pathname !== "/" && (
            <p className="text-sm text-muted-foreground/60 mb-6">
              You tried to access:{" "}
              <code className="bg-card px-2 py-1 rounded">
                {location.pathname}
              </code>
            </p>
          )}
        </div>

        <div className="flex gap-4 justify-center">
          <Button
            variant="hero"
            size="lg"
            onClick={() => window.history.back()}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => (window.location.href = "/")}
          >
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
