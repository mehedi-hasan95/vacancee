import { AccrodionModify } from "@/components/modify/accrodion-modify";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
const job = [
  {
    title: "Senior",
    id: "111",
  },
  {
    title: "Mid Label",
    id: "222",
  },
  {
    title: "Junior",
    id: "333",
  },
  {
    title: "Intern",
    id: "444",
  },
];
export const JobExperience = () => {
  return (
    <AccrodionModify title="Job Experience">
      <div className="space-y-2">
        {job.map((item) => (
          <div className="flex items-start gap-3" key={item.id}>
            <Checkbox id={item.id} />
            <Label htmlFor={item.id} className="uppercase">
              {item.title}
            </Label>
          </div>
        ))}
      </div>
    </AccrodionModify>
  );
};
