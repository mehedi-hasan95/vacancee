import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
}
export const Logo = ({ className }: Props) => {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold">
          V
        </div>
        <span
          className={cn(
            "text-xl font-semibold text-blue-600 hidden md:flex",
            className
          )}
        >
          Vacancee
        </span>
      </div>
    </Link>
  );
};
