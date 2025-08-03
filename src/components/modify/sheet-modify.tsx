import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { JSX } from "react";
interface Props {
  trigger?: JSX.Element;
  title?: string;
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left" | undefined;
}
export const SheetModify = ({
  children,
  title,
  trigger = <Menu />,
  side = "left",
}: Props) => {
  return (
    <Sheet>
      <SheetTrigger>{trigger}</SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader>
          {title && <SheetTitle>{title}</SheetTitle>}
          <SheetDescription>{children}</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
