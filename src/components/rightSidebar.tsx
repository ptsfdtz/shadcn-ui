import * as React from 'react';
import { PaletteIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';

type RightSidebarProps = {
  colorTheme: string;
  onColorThemeChange: (value: string) => void;
};

const colorThemes = [
  { value: 'neutral', label: 'Neutral', hue: 0, chroma: 0, lightness: 0.205 },
  { value: 'amber', label: 'Amber', hue: 58, chroma: 0.16, lightness: 0.67 },
  { value: 'blue', label: 'Blue', hue: 264.376, chroma: 0.243, lightness: 0.488 },
  { value: 'cyan', label: 'Cyan', hue: 222, chroma: 0.11, lightness: 0.61 },
  { value: 'emerald', label: 'Emerald', hue: 163, chroma: 0.13, lightness: 0.6 },
  { value: 'fuchsia', label: 'Fuchsia', hue: 323, chroma: 0.26, lightness: 0.59 },
  { value: 'green', label: 'Green', hue: 131.684, chroma: 0.2, lightness: 0.648 },
  { value: 'indigo', label: 'Indigo', hue: 277, chroma: 0.23, lightness: 0.51 },
  { value: 'lime', label: 'Lime', hue: 132, chroma: 0.18, lightness: 0.65 },
  { value: 'orange', label: 'Orange', hue: 41.116, chroma: 0.222, lightness: 0.646 },
  { value: 'pink', label: 'Pink', hue: 1, chroma: 0.22, lightness: 0.59 },
  { value: 'purple', label: 'Purple', hue: 302, chroma: 0.25, lightness: 0.56 },
  { value: 'red', label: 'Red', hue: 27.325, chroma: 0.245, lightness: 0.577 },
  { value: 'rose', label: 'Rose', hue: 17.585, chroma: 0.253, lightness: 0.586 },
  { value: 'sky', label: 'Sky', hue: 242, chroma: 0.14, lightness: 0.59 },
  { value: 'teal', label: 'Teal', hue: 185, chroma: 0.1, lightness: 0.6 },
  { value: 'violet', label: 'Violet', hue: 293.009, chroma: 0.281, lightness: 0.541 },
  { value: 'yellow', label: 'Yellow', hue: 91.936, chroma: 0.199, lightness: 0.852 },
] as const;

type ColorTheme = (typeof colorThemes)[number];

const getSwatchStyle = (themeOption: ColorTheme) => ({
  backgroundColor: `oklch(${themeOption.lightness} ${themeOption.chroma} ${themeOption.hue})`,
});

export function RightSidebar({ colorTheme, onColorThemeChange }: RightSidebarProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [handleTop, setHandleTop] = React.useState<number | null>(null);
  const dragStateRef = React.useRef<{ dragging: boolean; startY: number; startTop: number; moved: boolean }>({
    dragging: false,
    startY: 0,
    startTop: 0,
    moved: false,
  });

  React.useEffect(() => {
    if (handleTop !== null) {
      return;
    }
    setHandleTop(Math.round(window.innerHeight * 0.42));
  }, [handleTop]);

  const clampTop = React.useCallback((value: number) => {
    const min = 96;
    const max = window.innerHeight - 96;
    return Math.min(Math.max(value, min), max);
  }, []);

  const handlePointerMove = React.useCallback(
    (event: PointerEvent) => {
      const dragState = dragStateRef.current;
      if (!dragState.dragging) {
        return;
      }
      const delta = event.clientY - dragState.startY;
      if (Math.abs(delta) > 4) {
        dragState.moved = true;
      }
      setHandleTop(clampTop(dragState.startTop + delta));
    },
    [clampTop]
  );

  const stopDragging = React.useCallback(() => {
    dragStateRef.current.dragging = false;
    window.removeEventListener('pointermove', handlePointerMove);
  }, [handlePointerMove]);

  const handlePointerUp = React.useCallback(() => {
    stopDragging();
  }, [stopDragging]);

  const handleMobileTriggerPointerDown = (event: React.PointerEvent<HTMLButtonElement>) => {
    dragStateRef.current.dragging = true;
    dragStateRef.current.startY = event.clientY;
    dragStateRef.current.startTop = handleTop ?? Math.round(window.innerHeight * 0.42);
    dragStateRef.current.moved = false;
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp, { once: true });
  };

  const handleMobileTriggerClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (dragStateRef.current.moved) {
      event.preventDefault();
      return;
    }
    setMobileOpen(true);
  };

  React.useEffect(() => {
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [handlePointerMove, handlePointerUp]);

  const handleMobileThemeChange = (value: string) => {
    onColorThemeChange(value);
    setMobileOpen(false);
  };

  return (
    <>
      <aside className="bg-background border-l p-4 hidden xl:block w-64 flex-none sticky top-15 h-[calc(100vh-60px)] overflow-y-auto">
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <div className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Theme</div>
            <label className="text-sm font-medium">Color theme</label>
            <Select value={colorTheme} onValueChange={onColorThemeChange}>
              <SelectTrigger className="h-9 w-full">
                <SelectValue placeholder="Select a theme" />
              </SelectTrigger>
              <SelectContent position="popper" align="start" className="max-w-[calc(100vw-2rem)]">
                <SelectGroup>
                  <SelectLabel>Themes</SelectLabel>
                  {colorThemes.map(themeOption => (
                    <SelectItem key={themeOption.value} value={themeOption.value}>
                      <span className="flex items-center gap-2">
                        <span className="size-2.5 rounded-full border border-black/10 dark:border-white/20" style={getSwatchStyle(themeOption)} />
                        <span>{themeOption.label}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </aside>

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          className="xl:hidden fixed right-0 z-10 -translate-y-1/2 rounded-r-none rounded-l-full border-r-0 bg-background/95 shadow-md backdrop-blur touch-none"
          style={{ top: `${handleTop ?? 280}px` }}
          aria-label="Open theme settings"
          onPointerDown={handleMobileTriggerPointerDown}
          onClick={handleMobileTriggerClick}
        >
          <PaletteIcon className="size-4" />
        </Button>
        <SheetContent
          side="bottom"
          className="xl:hidden data-[side=bottom]:inset-x-auto data-[side=bottom]:left-1/2 data-[side=bottom]:w-[min(32rem,calc(100vw-1rem))] data-[side=bottom]:-translate-x-1/2 rounded-t-2xl pt-2 pb-[calc(env(safe-area-inset-bottom)+1.5rem)]"
        >
          <div className="bg-muted mx-auto mb-2 h-1.5 w-12 rounded-full" />
          <SheetHeader className="px-2 pb-2">
            <SheetTitle>Theme</SheetTitle>
            <SheetDescription>Choose a color theme for the UI.</SheetDescription>
          </SheetHeader>
          <div className="px-2 pb-2">
            <Select value={colorTheme} onValueChange={handleMobileThemeChange}>
              <SelectTrigger className="h-9 w-full">
                <SelectValue placeholder="Select a theme" />
              </SelectTrigger>
              <SelectContent position="popper" align="start">
                <SelectGroup>
                  <SelectLabel>Themes</SelectLabel>
                  {colorThemes.map(themeOption => (
                    <SelectItem key={themeOption.value} value={themeOption.value}>
                      <span className="flex items-center gap-2">
                        <span className="size-2.5 rounded-full border border-black/10 dark:border-white/20" style={getSwatchStyle(themeOption)} />
                        <span>{themeOption.label}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
