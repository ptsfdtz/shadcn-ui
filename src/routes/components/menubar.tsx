import { ComponentPage } from "@/components/docs/component-page"
import { mdxComponents } from "@/components/docs/mdx-components"
import Docs from "@/docs/components/menubar.mdx"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarPreview() {
  return (
    <ComponentPage
      title="Menubar"
      description="用于展示应用菜单栏"
      docs={<Docs components={mdxComponents} />}
    >
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab
              <MenubarShortcut>Ctrl+T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Window
              <MenubarShortcut>Ctrl+N</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem variant="destructive">Close</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Undo</MenubarItem>
            <MenubarItem>Redo</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </ComponentPage>
  )
}
