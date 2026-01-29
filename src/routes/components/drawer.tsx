import { ComponentPage } from "@/components/docs/component-page"
import { mdxComponents } from "@/components/docs/mdx-components"
import Docs from "@/docs/components/drawer.mdx"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function DrawerPreview() {
  return (
    <ComponentPage
      title="Drawer"
      description="用于从屏幕边缘滑出的抽屉面板"
      docs={<Docs components={mdxComponents} />}
    >
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Move faster</DrawerTitle>
            <DrawerDescription>
              Build custom interfaces without starting from scratch.
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 pb-2 text-sm text-muted-foreground">
            Drag down to close or use the button below.
          </div>
          <DrawerFooter>
            <Button>Save changes</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </ComponentPage>
  )
}
