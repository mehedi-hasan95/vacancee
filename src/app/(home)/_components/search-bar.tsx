import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <Input
        placeholder="Search for job posts, companies, location"
        className="pl-10 lg:w-96 xl:w-2xl"
      />
    </div>
  );
};
