import { ComponentPage } from '@/components/docs/component-page';
import { mdxComponents } from '@/components/docs/mdx-components';
import Docs from '@/docs/components/sheet.mdx';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export function SheetPreview() {
  return (
    <ComponentPage title="Sheet" description="用于侧边面板或临时抽屉" docs={<Docs components={mdxComponents} />}>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Quick settings</SheetTitle>
            <SheetDescription>Adjust preferences without leaving the page.</SheetDescription>
          </SheetHeader>
          <div className="px-4 text-sm text-muted-foreground">You can place form fields or navigation here.</div>
          <SheetFooter>
            <Button>Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </ComponentPage>
  );
}
