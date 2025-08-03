import { HomeMens } from "@/constants/menus";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const HomeMenu = ({ className }: { className?: string }) => {
  return (
    <nav className={cn("flex items-center gap-6", className)}>
      {HomeMens.map((item) => (
        <Link
          href={`/${item.href}`}
          className="text-gray-700 hover:text-blue-600"
          key={item.id}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
