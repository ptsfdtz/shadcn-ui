import { ComponentPage } from '@/components/docs/component-page';
import { mdxComponents } from '@/components/docs/mdx-components';
import Docs from '@/docs/components/sonner.mdx';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

export function SonnerPreview() {
  return (
    <ComponentPage description="用于轻量提示与消息通知" docs={<Docs components={mdxComponents} />}>
      <div className="flex flex-col items-start gap-3">
        <Button onClick={() => toast.success('Saved successfully')}>Show toast</Button>
        <Toaster position="top-center" />
      </div>
    </ComponentPage>
  );
}
