import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaMoon, FaSun } from 'react-icons/fa';

type HeaderProps = {
  search: string;
  onSearchChange: (value: string) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  colorTheme: string;
  onColorThemeChange: (value: string) => void;
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
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

export function Header({ search, onSearchChange, theme, onToggleTheme, colorTheme, onColorThemeChange, sidebarOpen, onToggleSidebar }: HeaderProps) {
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
          <Select value={colorTheme} onValueChange={onColorThemeChange}>
            <SelectTrigger className="h-9 w-28 sm:w-32 md:w-36">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent position="popper" align="end">
              <SelectGroup>
                <SelectLabel>Themes</SelectLabel>
                {colorThemes.map(themeOption => (
                  <SelectItem key={themeOption.value} value={themeOption.value}>
                    <span className="flex items-center gap-2">
                      <span className="size-3.5 rounded-full border border-black/10 dark:border-white/20" style={getSwatchStyle(themeOption)} />
                      <span>{themeOption.label}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
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
