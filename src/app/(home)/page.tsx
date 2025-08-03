import { Separator } from "@/components/ui/separator";
import { HomeNavbar } from "./_components/home-navbar";
import { HomeSiidebar } from "./_components/home-sidebar/home-sidebar";
import { JobGrid } from "@/components/common/job-grid";
import { SheetModify } from "@/components/modify/sheet-modify";
import { Filter } from "lucide-react";

export default function Home() {
  return (
    <div>
      <HomeNavbar />
      <Separator />
      <div className="flex gap-3 md:gap-5 lg:gap-8 xl:gap-10 relative container-3xl">
        <aside className="w-1/3 xl:w-1/5 border-r min-h-screen sticky top-0 space-y-6 pt-5 h-screen hidden lg:block">
          <HomeSiidebar />
        </aside>
        <div className="lg:hidden pt-5">
          <SheetModify trigger={<Filter />}>
            <HomeSiidebar />
          </SheetModify>
        </div>
        <div className="pt-5 grid w-full xl:grid xl:grid-cols-2 gap-5">
          {Array.from({ length: 20 }).map((_, index) => (
            <JobGrid key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
