import { AccrodionModify } from "@/components/modify/accrodion-modify";

const salaryData = [
  { range: "$80k", height: 60 },
  { range: "$90k", height: 80 },
  { range: "$100k", height: 45 },
  { range: "$110k", height: 90 },
  { range: "$120k", height: 70 },
  { range: "$130k", height: 85 },
  { range: "$140k", height: 40 },
  { range: "$150k", height: 65 },
  { range: "$160k", height: 55 },
  { range: "$170k", height: 75 },
  { range: "$180k", height: 50 },
  { range: "$190k", height: 35 },
  { range: "$200k", height: 60 },
  { range: "$210k", height: 45 },
  { range: "$220k", height: 70 },
  { range: "$230k", height: 40 },
  { range: "$240k", height: 55 },
  { range: "$250k", height: 80 },
  { range: "$260k", height: 45 },
  { range: "$270k", height: 35 },
  { range: "$280k", height: 50 },
  { range: "$290k", height: 40 },
  { range: "$300k", height: 60 },
];
export const PriceSlider = () => {
  return (
    <AccrodionModify title="Salary Range">
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-end justify-center h-32 gap-1">
            {salaryData.map((item, index) => (
              <div
                key={index}
                className="bg-blue-500 w-2 rounded-t"
                style={{ height: `${item.height}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>
              Min
              <br />
              $80k
            </span>
            <span>
              Max
              <br />
              $300k
            </span>
          </div>
        </div>
      </div>
    </AccrodionModify>
  );
};
