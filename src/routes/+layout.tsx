import * as React from "react"
import { Outlet } from "react-router-dom"

import { Header } from "@/components/header"
import { SiderBar } from "@/components/siderBar"
import { componentItems } from "@/lib/registry"

export function Layout() {
  const [search, setSearch] = React.useState("")
  const [theme, setTheme] = React.useState<"light" | "dark">("light")

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  const filtered = React.useMemo(() => {
    const value = search.trim().toLowerCase()
    if (!value) {
      return componentItems
    }
    return componentItems.filter((item) =>
      item.name.toLowerCase().includes(value)
    )
  }, [search])

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header
        search={search}
        onSearchChange={setSearch}
        theme={theme}
        onToggleTheme={() =>
          setTheme((current) => (current === "light" ? "dark" : "light"))
        }
      />
      <div className="flex min-h-[calc(100vh-60px)]">
        <SiderBar items={filtered} />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
