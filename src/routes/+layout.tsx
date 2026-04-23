import * as React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Header, LeftSiderBar, RightSidebar } from '@/components';
import { componentItems } from '@/lib/registry';
import { TooltipProvider } from '@/components/ui/tooltip';

const SEEN_COMPONENT_IDS_STORAGE_KEY = 'seen-component-ids';
const validComponentIds = new Set(componentItems.map(item => item.id));
const defaultSeenComponentIds = componentItems
  .filter(item => !item.isNew)
  .map(item => item.id);

function normalizePath(pathname: string) {
  return pathname.replace(/\/+$/, '') || '/';
}

function readSeenComponentIds() {
  if (typeof window === 'undefined') {
    return defaultSeenComponentIds;
  }

  const stored = window.localStorage.getItem(SEEN_COMPONENT_IDS_STORAGE_KEY);
  if (!stored) {
    return defaultSeenComponentIds;
  }

  try {
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) {
      return defaultSeenComponentIds;
    }

    return Array.from(
      new Set(
        parsed.filter((id): id is string => typeof id === 'string' && validComponentIds.has(id))
      )
    );
  } catch {
    return defaultSeenComponentIds;
  }
}

export function Layout() {
  const location = useLocation();
  const [search, setSearch] = React.useState('');
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [theme, setTheme] = React.useState<'light' | 'dark'>(() => {
    const stored = window.localStorage.getItem('theme');
    return stored === 'dark' || stored === 'light' ? stored : 'light';
  });
  const [colorTheme, setColorTheme] = React.useState(() => {
    const stored = window.localStorage.getItem('color-theme');
    return stored || 'neutral';
  });
  const [seenComponentIds, setSeenComponentIds] = React.useState<Set<string>>(
    () => new Set(readSeenComponentIds())
  );

  const currentComponent = React.useMemo(() => {
    const pathname = normalizePath(location.pathname);
    return componentItems.find(item => normalizePath(item.path) === pathname);
  }, [location.pathname]);

  React.useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  React.useLayoutEffect(() => {
    document.documentElement.dataset.theme = colorTheme;
    window.localStorage.setItem('color-theme', colorTheme);
  }, [colorTheme]);

  React.useEffect(() => {
    window.localStorage.setItem(
      SEEN_COMPONENT_IDS_STORAGE_KEY,
      JSON.stringify(Array.from(seenComponentIds))
    );
  }, [seenComponentIds]);

  React.useEffect(() => {
    if (!currentComponent || seenComponentIds.has(currentComponent.id)) {
      return;
    }

    setSeenComponentIds(previous => {
      if (previous.has(currentComponent.id)) {
        return previous;
      }

      const next = new Set(previous);
      next.add(currentComponent.id);
      return next;
    });
  }, [currentComponent, seenComponentIds]);

  const filtered = React.useMemo(() => {
    const value = search.trim().toLowerCase();
    if (!value) {
      return componentItems;
    }
    return componentItems.filter(item => item.name.toLowerCase().includes(value));
  }, [search]);

  const unseenComponentIds = React.useMemo(() => {
    const next = new Set(
      componentItems
        .filter(item => !seenComponentIds.has(item.id))
        .map(item => item.id)
    );

    if (currentComponent) {
      next.delete(currentComponent.id);
    }

    return next;
  }, [currentComponent, seenComponentIds]);

  return (
    <TooltipProvider>
      <div className="bg-background text-foreground min-h-screen">
        <Header
          search={search}
          onSearchChange={setSearch}
          theme={theme}
          onToggleTheme={() => setTheme(current => (current === 'light' ? 'dark' : 'light'))}
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen(open => !open)}
        />
        <div className="relative flex min-h-[calc(100vh-60px)]">
          {sidebarOpen && <div className="fixed inset-0 z-20 bg-black/40 md:hidden" onClick={() => setSidebarOpen(false)} aria-hidden="true" />}
          <LeftSiderBar
            items={filtered}
            unseenItemIds={unseenComponentIds}
            mobileOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            onSelect={() => setSidebarOpen(false)}
          />
          <main className="flex min-w-0 flex-1 justify-center p-4 md:p-6">
            <div className="w-full min-w-0">
              <Outlet />
            </div>
          </main>
          <RightSidebar colorTheme={colorTheme} onColorThemeChange={setColorTheme} />
        </div>
      </div>
    </TooltipProvider>
  );
}
