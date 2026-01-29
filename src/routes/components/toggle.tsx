import { ComponentPage } from "@/components/docs/component-page"
import { mdxComponents } from "@/components/docs/mdx-components"
import Docs from "@/docs/components/toggle.mdx"
import { Toggle } from "@/components/ui/toggle"
import { BoldIcon } from "lucide-react"

export function TogglePreview() {
  return (
    <ComponentPage
      title="Toggle"
      description="用于切换单个开关状态"
      docs={<Docs components={mdxComponents} />}
    >
      <Toggle aria-label="Toggle bold">
        <BoldIcon />
        Bold
      </Toggle>
    </ComponentPage>
  )
}
