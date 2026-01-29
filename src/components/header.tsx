import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FaGithub, FaMoon, FaSun } from "react-icons/fa"

type HeaderProps = {
  search: string
  onSearchChange: (value: string) => void
  theme: "light" | "dark"
  onToggleTheme: () => void
}

export function Header({
  search,
  onSearchChange,
  theme,
  onToggleTheme,
}: HeaderProps) {
  return (
    <header className="bg-background/95 sticky top-0 z-10 flex items-center gap-3 border-b px-4 py-3 backdrop-blur">
      <div className="text-sm font-semibold tracking-wide">My UI Kit</div>
      <div className="ml-auto flex w-full max-w-md items-center gap-2">
        <Button asChild variant="ghost" size="icon" aria-label="GitHub">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </Button>
        <Input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search components..."
          aria-label="Search components"
        />
        <Button
          variant="outline"
          size="icon"
          onClick={onToggleTheme}
          aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </Button>
      </div>
    </header>
  )
}
