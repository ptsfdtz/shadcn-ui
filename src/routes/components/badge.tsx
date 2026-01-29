import { ComponentPage } from '@/components/docs/component-page';
import { mdxComponents } from '@/components/docs/mdx-components';
import Docs from '@/docs/components/badge.mdx';
import { Badge } from '@/components/ui/badge';

export function BadgePreview() {
  return (
    <ComponentPage title="Badge" description="用于状态提示与标签" docs={<Docs components={mdxComponents} />}>
      <div className="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    </ComponentPage>
  );
}
