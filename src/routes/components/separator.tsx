import { ComponentPage } from "@/components/docs/component-page"
import { mdxComponents } from "@/components/docs/mdx-components"
import Docs from "@/docs/components/separator.mdx"
import { Separator } from "@/components/ui/separator"

export function SeparatorPreview() {
  return (
    <ComponentPage
      title="Separator"
      description="视觉分割线"
      docs={<Docs components={mdxComponents} />}
    >
      <div className="flex items-center gap-4">
        <div className="text-sm">Left</div>
        <Separator className="flex-1" />
        <div className="text-sm">Right</div>
      </div>
    </ComponentPage>
  )
}
