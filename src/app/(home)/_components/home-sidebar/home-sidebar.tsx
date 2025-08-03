import { Button } from "@/components/ui/button";
import { PriceSlider } from "./price-slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { JobType } from "./job-type";
import { Separator } from "@/components/ui/separator";
import { RemoteJob } from "./remote-job";
import { JobCategories } from "./job-categories";
import { JobExperience } from "./job-experience";

export const HomeSiidebar = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-5">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button variant="link" className="text-blue-600 p-0">
          Reset
        </Button>
      </div>
      <ScrollArea className="h-[85vh]">
        <div className="space-y-2 px-5">
          <PriceSlider />
          <Separator />
          <JobType />
          <Separator />
          <RemoteJob />
          <Separator />
          <JobCategories />
          <Separator />
          <JobExperience />
        </div>
      </ScrollArea>
      <Separator />
    </div>
  );
};
