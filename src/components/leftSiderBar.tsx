import { NavLink } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

type SidebarItem = {
  id: string;
  name: string;
  path: string;
};

type SiderBarProps = {
  items: SidebarItem[];
  mobileOpen?: boolean;
  onClose?: () => void;
  onSelect?: () => void;
};

export function LeftSiderBar({ items, mobileOpen = false, onClose, onSelect }: SiderBarProps) {
  return (
    <aside
      className={cn(
        'bg-background border-r p-4 overflow-y-auto no-scrollbar',
        'fixed inset-y-0 left-0 z-30 h-dvh w-72 max-w-[80vw] -translate-x-full transition-transform duration-200 ease-out md:sticky md:top-15 md:h-[calc(100vh-60px)] md:translate-x-0 md:w-64 md:max-w-none md:flex-none',
        mobileOpen && 'translate-x-0'
      )}
      onKeyDown={event => {
        if (event.key === 'Escape') {
          onClose?.();
        }
      }}
    >
      <div className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Components</div>
      <Separator className="my-3" />
      <div className="flex flex-col gap-1">
        {items.map(item => (
          <NavLink key={item.id} to={item.path} className="block">
            {({ isActive }) => (
              <Button
                variant="ghost"
                className={cn('w-full justify-start', isActive && 'bg-accent text-accent-foreground')}
                onClick={() => onSelect?.()}
              >
                {item.name}
              </Button>
            )}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}
