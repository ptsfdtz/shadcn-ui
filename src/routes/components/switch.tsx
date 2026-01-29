import { ComponentPage } from "@/components/docs/component-page"
import { mdxComponents } from "@/components/docs/mdx-components"
import Docs from "@/docs/components/switch.mdx"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function SwitchPreview() {
  return (
    <ComponentPage
      title="Switch"
      description="用于开关状态切换"
      docs={<Docs components={mdxComponents} />}
    >
      <div className="flex items-center gap-3">
        <Switch id="airplane" />
        <Label htmlFor="airplane">Airplane mode</Label>
      </div>
    </ComponentPage>
  )
}
