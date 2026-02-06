import * as React from 'react';

import { ComponentPage } from '@/components/docs/component-page';
import { mdxComponents } from '@/components/docs/mdx-components';
import Docs from '@/docs/components/context-menu.mdx';
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';

export function ContextMenuPreview() {
  const [showStatus, setShowStatus] = React.useState(true);
  const [align, setAlign] = React.useState('left');

  return (
    <ComponentPage title="Context Menu" description="用于右键菜单" docs={<Docs components={mdxComponents} />}>
      <ContextMenu>
        <ContextMenuTrigger className="border bg-muted/30 text-muted-foreground flex h-32 w-full items-center justify-center rounded-md text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-56">
          <ContextMenuLabel>View</ContextMenuLabel>
          <ContextMenuCheckboxItem checked={showStatus} onCheckedChange={checked => setShowStatus(checked === true)}>
            Show status bar
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuLabel>Align</ContextMenuLabel>
          <ContextMenuRadioGroup value={align} onValueChange={setAlign}>
            <ContextMenuRadioItem value="left">Left</ContextMenuRadioItem>
            <ContextMenuRadioItem value="center">Center</ContextMenuRadioItem>
            <ContextMenuRadioItem value="right">Right</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
          <ContextMenuSeparator />
          <ContextMenuItem>
            Refresh
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </ComponentPage>
  );
}
