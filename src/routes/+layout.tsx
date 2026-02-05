import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components/header';
import { SiderBar } from '@/components/siderBar';
import { componentItems } from '@/lib/registry';

export function Layout() {
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

  React.useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  React.useLayoutEffect(() => {
    document.documentElement.dataset.theme = colorTheme;
    window.localStorage.setItem('color-theme', colorTheme);
  }, [colorTheme]);

  const filtered = React.useMemo(() => {
    const value = search.trim().toLowerCase();
    if (!value) {
      return componentItems;
    }
    return componentItems.filter(item => item.name.toLowerCase().includes(value));
  }, [search]);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header
        search={search}
        onSearchChange={setSearch}
        theme={theme}
        onToggleTheme={() => setTheme(current => (current === 'light' ? 'dark' : 'light'))}
        colorTheme={colorTheme}
        onColorThemeChange={setColorTheme}
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen(open => !open)}
      />
      <div className="relative flex min-h-[calc(100vh-60px)]">
        {sidebarOpen && <div className="fixed inset-0 z-20 bg-black/40 md:hidden" onClick={() => setSidebarOpen(false)} aria-hidden="true" />}
        <SiderBar items={filtered} mobileOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} onSelect={() => setSidebarOpen(false)} />
        <main className="flex min-w-0 flex-1 justify-center p-4 md:p-6">
          <div className="w-full min-w-0">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
