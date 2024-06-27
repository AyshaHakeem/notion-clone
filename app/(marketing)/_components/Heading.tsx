import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="min-width-3xl space-y-4">
      <h1 className="text-5xl sm:text-3xl md:text-6xl font-bold">
        Your ideas, Documents, & Plans. Unified. Welcome to
        <span className="underline"> Notion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Notion is the connected workspace where <br /> better, faster work
        happens.
      </h3>
      <Button>
        Enter Notion
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
