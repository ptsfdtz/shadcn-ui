import { ComponentPage } from '@/components/docs/component-page';
import { mdxComponents } from '@/components/docs/mdx-components';
import Docs from '@/docs/components/spinner.mdx';
import { Spinner } from '@/components/ui/spinner';

export function SpinnerPreview() {
  return (
    <ComponentPage title="Spinner" description="用于加载状态指示" docs={<Docs components={mdxComponents} />}>
      <div className="flex items-center gap-2 text-sm">
        <Spinner />
        Loading...
      </div>
    </ComponentPage>
  );
}
