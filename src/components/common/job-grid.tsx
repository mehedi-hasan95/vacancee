import { Building2, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const JobGrid = () => {
  return (
    <div
      //   key={index}
      className="flex items-start justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
    >
      <div className="space-y-2 flex-1">
        <div className="flex items-start justify-between">
          <div>
            {/* <h3 className="font-semibold text-lg">{job.title}</h3> */}
            <h3 className="font-semibold text-lg">Test</h3>
            <p className="text-muted-foreground flex items-center gap-1">
              <Building2 className="h-3 w-3" />
              {/* {job.company} */}
              Company
            </p>
          </div>
          <div className="text-right">
            {/* <p className="font-semibold text-green-600">{job.salary}</p> */}
            <p className="font-semibold text-green-600">$120k-$150k</p>
            {/* <p className="text-xs text-muted-foreground">{job.posted}</p> */}
            <p className="text-xs text-muted-foreground">5 days ago</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-sm">
          <Badge variant="secondary" className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {/* {job.location} */}
            Jessore, Bangladesh
          </Badge>
          {/* <Badge variant="outline">{job.type}</Badge> */}
          <Badge variant="outline">Full Time</Badge>
          {/* <Badge variant="outline">{job.experience}</Badge> */}
          <Badge variant="outline">Senior</Badge>

          <Badge variant="default" className="bg-blue-100 text-blue-800">
            Remote
          </Badge>
        </div>
      </div>

      <div className="flex flex-col gap-2 ml-4">
        <Button size="sm">Apply Now</Button>
        <Button size="sm" variant="outline">
          Save Job
        </Button>
      </div>
    </div>
  );
};
