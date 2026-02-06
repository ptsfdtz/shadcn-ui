import { ComponentPage } from '@/components/docs/component-page';
import { mdxComponents } from '@/components/docs/mdx-components';
import Docs from '@/docs/components/popover.mdx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from '@/components/ui/popover';

export function PopoverPreview() {
  return (
    <ComponentPage title="Popover" description="用于触发显示浮层内容" docs={<Docs components={mdxComponents} />}>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle>Dimensions</PopoverTitle>
            <PopoverDescription>Set the display area.</PopoverDescription>
          </PopoverHeader>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="auto" />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </ComponentPage>
  );
}
