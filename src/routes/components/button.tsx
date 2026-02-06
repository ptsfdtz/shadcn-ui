import { ComponentPage } from '@/components/docs/component-page';
import { mdxComponents } from '@/components/docs/mdx-components';
import Docs from '@/docs/components/button.mdx';
import { Button } from '@/components/ui/button';

export function ButtonPreview() {
  return (
    <ComponentPage title="Button" description="触发操作的主要按钮" docs={<Docs components={mdxComponents} />}>
      <div className="flex flex-wrap gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
    </ComponentPage>
  );
}
