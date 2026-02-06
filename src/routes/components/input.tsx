import { ComponentPage } from '@/components/docs/component-page';
import { mdxComponents } from '@/components/docs/mdx-components';
import Docs from '@/docs/components/input.mdx';
import { Input } from '@/components/ui/input';

export function InputPreview() {
  return (
    <ComponentPage title="Input" description="单行文本输入" docs={<Docs components={mdxComponents} />}>
      <div className="grid gap-3">
        <Input placeholder="Default input" />
        <Input placeholder="Disabled input" disabled />
      </div>
    </ComponentPage>
  );
}
