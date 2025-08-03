import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
interface Props {
  title: string;
  children: React.ReactNode;
}
export const AccrodionModify = ({ children, title }: Props) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-bold text-sm">
          {title}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
