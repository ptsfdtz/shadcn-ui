import { ComponentPage } from '@/components/docs/component-page';
import { mdxComponents } from '@/components/docs/mdx-components';
import Docs from '@/docs/components/scroll-area.mdx';
import { ScrollArea } from '@/components/ui/scroll-area';

export function ScrollAreaPreview() {
  const items = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`);

  return (
    <ComponentPage title="Scroll Area" description="用于自定义滚动容器" docs={<Docs components={mdxComponents} />}>
      <ScrollArea className="h-48 w-full rounded-md border p-4">
        <div className="space-y-2 text-sm">
          {items.map(item => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </ScrollArea>
    </ComponentPage>
  );
}
