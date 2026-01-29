import * as React from 'react';
import * as ResizablePrimitive from 'react-resizable-panels';

import { cn } from '@/lib/utils';

function ResizablePanelGroup({
  className,
  direction,
  ...props
}: Omit<React.ComponentProps<typeof ResizablePrimitive.Group>, 'orientation'> & {
  direction?: 'horizontal' | 'vertical';
}) {
  const orientation = direction ?? 'horizontal';
  return (
    <ResizablePrimitive.Group
      data-slot="resizable-panel-group"
      data-panel-group-direction={orientation}
      orientation={orientation}
      className={cn('flex h-full w-full data-[panel-group-direction=vertical]:flex-col', className)}
      {...props}
    />
  );
}

function ResizablePanel({ ...props }: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />;
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Separator> & {
  withHandle?: boolean;
}) {
  return (
    <ResizablePrimitive.Separator
      data-slot="resizable-handle"
      className={cn(
        'bg-border focus-visible:ring-ring relative flex h-px w-full items-center justify-center after:absolute after:inset-x-0 after:top-1/2 after:h-1 after:-translate-y-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden [&[aria-orientation=vertical]]:h-full [&[aria-orientation=vertical]]:w-px [&[aria-orientation=vertical]]:after:inset-y-0 [&[aria-orientation=vertical]]:after:left-1/2 [&[aria-orientation=vertical]]:after:w-1 [&[aria-orientation=vertical]]:after:-translate-x-1/2 [&[aria-orientation=vertical]>div]:rotate-90',
        className
      )}
      {...props}
    >
      {withHandle && <div className="bg-border h-6 w-1 rounded-lg z-10 flex shrink-0" />}
    </ResizablePrimitive.Separator>
  );
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
