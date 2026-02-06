import { ComponentPage } from '@/components/docs/component-page';
import { mdxComponents } from '@/components/docs/mdx-components';
import Docs from '@/docs/components/textarea.mdx';
import { Textarea } from '@/components/ui/textarea';

export function TextareaPreview() {
  return (
    <ComponentPage title="Textarea" description="多行文本输入" docs={<Docs components={mdxComponents} />}>
      <Textarea placeholder="Write something..." rows={5} />
    </ComponentPage>
  );
}
