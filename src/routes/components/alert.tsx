import { ComponentPage } from '@/components/docs/component-page';
import { mdxComponents } from '@/components/docs/mdx-components';
import Docs from '@/docs/components/alert.mdx';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { InfoIcon, TriangleAlertIcon } from 'lucide-react';

export function AlertPreview() {
  return (
    <ComponentPage title="Alert" description="用于传达重要状态信息" docs={<Docs components={mdxComponents} />}>
      <div className="grid gap-4">
        <Alert>
          <InfoIcon />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <TriangleAlertIcon />
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription>Please check your connection and try again.</AlertDescription>
        </Alert>
      </div>
    </ComponentPage>
  );
}
