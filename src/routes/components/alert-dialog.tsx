import { ComponentPage } from '@/components/docs/component-page';
import { mdxComponents } from '@/components/docs/mdx-components';
import Docs from '@/docs/components/alert-dialog.mdx';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export function AlertDialogPreview() {
  return (
    <ComponentPage title="Alert Dialog" description="用于关键操作的确认弹窗" docs={<Docs components={mdxComponents} />}>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Open dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm action</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. Continue?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </ComponentPage>
  );
}
