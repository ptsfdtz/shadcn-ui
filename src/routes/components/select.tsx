import { ComponentPage } from '@/components/docs/component-page';
import { mdxComponents } from '@/components/docs/mdx-components';
import Docs from '@/docs/components/select.mdx';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

export function SelectPreview() {
  return (
    <ComponentPage
      title="Select"
      description="下拉选择"
      docUrl="https://ui.shadcn.com/docs/components/select"
      docs={<Docs components={mdxComponents} />}
    >
      <Select>
        <SelectTrigger className="w-full max-w-48">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </ComponentPage>
  );
}
