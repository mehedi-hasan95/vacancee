import { AccrodionModify } from "@/components/modify/accrodion-modify";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Label } from "@/components/ui/label";
const categories = [
  {
    id: "11",
    title: "Web Development",
  },
  {
    id: "22",
    title: "App Development",
  },
  {
    id: "33",
    title: "Graphics Development",
  },
];
export const JobCategories = () => {
  return (
    <AccrodionModify title="Job Categories">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandSeparator />
          <CommandGroup>
            {categories.map((item) => (
              <CommandItem key={item.id}>
                <div className="flex items-start gap-3">
                  <Checkbox id={item.id} />
                  <Label htmlFor={item.id} className="uppercase cursor-pointer">
                    {item.title}
                  </Label>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </AccrodionModify>
  );
};
