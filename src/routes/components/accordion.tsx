import { ComponentPage } from '@/components/docs/component-page';
import { mdxComponents } from '@/components/docs/mdx-components';
import Docs from '@/docs/components/accordion.mdx';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
export function AccordionPreview() {
  return (
    <ComponentPage
      title="Accordion"
      description="可折叠的内容分组"
      docUrl="https://ui.shadcn.com/docs/components/accordion"
      docs={<Docs components={mdxComponents} />}
    >
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is shadcn/ui?</AccordionTrigger>
          <AccordionContent>A collection of accessible UI components built with Radix UI and Tailwind CSS.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Can I customize the styles?</AccordionTrigger>
          <AccordionContent>Yes. All components are unstyled by default and fully customizable.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Does it work with Vite?</AccordionTrigger>
          <AccordionContent>Yes, it works great with Vite and React.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </ComponentPage>
  );
}
