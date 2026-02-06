import { ComponentPage } from '@/components/docs/component-page';
import { mdxComponents } from '@/components/docs/mdx-components';
import Docs from '@/docs/components/empty.mdx';
import { Button } from '@/components/ui/button';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty';
import { InboxIcon } from 'lucide-react';

export function EmptyPreview() {
  return (
    <ComponentPage title="Empty" description="用于空状态占位展示" docs={<Docs components={mdxComponents} />}>
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <InboxIcon />
          </EmptyMedia>
          <EmptyTitle>No messages</EmptyTitle>
          <EmptyDescription>You're all caught up.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="outline">Create message</Button>
        </EmptyContent>
      </Empty>
    </ComponentPage>
  );
}
