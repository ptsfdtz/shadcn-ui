import { NavLink } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

type SidebarItem = {
  id: string
  name: string
  path: string
}

type SiderBarProps = {
  items: SidebarItem[]
}

export function SiderBar({ items }: SiderBarProps) {
  return (
    <aside className="bg-background w-full max-w-xs border-r p-4">
      <div className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
        Components
      </div>
      <Separator className="my-3" />
      <div className="flex flex-col gap-1">
        {items.map((item) => (
          <NavLink key={item.id} to={item.path} className="block">
            {({ isActive }) => (
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start",
                  isActive && "bg-accent text-accent-foreground"
                )}
              >
                {item.name}
              </Button>
            )}
          </NavLink>
        ))}
      </div>
    </aside>
  )
}
