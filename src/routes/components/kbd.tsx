import { ComponentPage } from "@/components/docs/component-page"
import { mdxComponents } from "@/components/docs/mdx-components"
import Docs from "@/docs/components/kbd.mdx"
import { Kbd, KbdGroup } from "@/components/ui/kbd"

export function KbdPreview() {
  return (
    <ComponentPage
      title="Kbd"
      description="用于显示键盘快捷键"
      docs={<Docs components={mdxComponents} />}
    >
      <div className="flex items-center gap-2 text-sm">
        Press
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
        to search
      </div>
    </ComponentPage>
  )
}
