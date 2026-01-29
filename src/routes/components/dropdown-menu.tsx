import * as React from "react"

import { ComponentPage } from "@/components/docs/component-page"
import { mdxComponents } from "@/components/docs/mdx-components"
import Docs from "@/docs/components/dropdown-menu.mdx"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuPreview() {
  const [showStatus, setShowStatus] = React.useState(true)
  const [position, setPosition] = React.useState("bottom")

  return (
    <ComponentPage
      title="Dropdown Menu"
      description="用于点击展开的菜单"
      docUrl="https://ui.shadcn.com/docs/components/dropdown-menu"
      docs={<Docs components={mdxComponents} />}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              New file
              <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>Duplicate</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showStatus}
            onCheckedChange={(value) => setShowStatus(value === true)}
          >
            Show status bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={position}
            onValueChange={setPosition}
          >
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </ComponentPage>
  )
}
