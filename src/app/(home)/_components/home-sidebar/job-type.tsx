import { AccrodionModify } from "@/components/modify/accrodion-modify";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
const job = [
  {
    title: "fullTime",
    id: "1",
  },
  {
    title: "internship",
    id: "2",
  },
  {
    title: "partTime",
    id: "3",
  },
  {
    title: "freelance",
    id: "4",
  },
];
export const JobType = () => {
  return (
    <AccrodionModify title="Job Type">
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
