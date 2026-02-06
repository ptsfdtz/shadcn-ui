import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaMoon, FaSun } from 'react-icons/fa';

type HeaderProps = {
  search: string;
  onSearchChange: (value: string) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
};

export function Header({ search, onSearchChange, theme, onToggleTheme, sidebarOpen, onToggleSidebar }: HeaderProps) {
  return (
    <header className="bg-background/95 sticky top-0 z-20 border-b px-4 py-3 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={sidebarOpen ? '关闭侧边栏' : '打开侧边栏'}
            aria-expanded={sidebarOpen}
            onClick={onToggleSidebar}
          >
            {sidebarOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
          <a href="/" className="text-lg font-bold tracking-wide sm:text-xl">
            <span className="sr-only">Shadcn UI 组件库</span>
            <span className="hidden sm:inline">Shadcn UI 组件库</span>
          </a>
        </div>
        <div className="ml-auto flex min-w-0 items-center gap-2">
          <Button asChild variant="ghost" size="icon" aria-label="GitHub" className="shrink-0">
            <a href="https://github.com/ptsfdtz/shadcn-ui" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </Button>
          <Input
            value={search}
            onChange={event => onSearchChange(event.target.value)}
            placeholder="搜索组件..."
            aria-label="搜索组件"
            className="h-9 w-36 sm:w-48 md:w-64 lg:w-72"
          />
          <Button
            variant="outline"
            size="icon"
            onClick={onToggleTheme}
            aria-label={theme === 'light' ? '切换到暗色主题' : '切换到亮色主题'}
            className="shrink-0"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </Button>
        </div>
      </div>
    </header>
  );
}
