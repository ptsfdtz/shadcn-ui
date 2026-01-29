import { ComponentPage } from "@/components/docs/component-page"
import { mdxComponents } from "@/components/docs/mdx-components"
import Docs from "@/docs/components/checkbox.mdx"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function CheckboxPreview() {
  return (
    <ComponentPage
      title="Checkbox"
      description="用于多选或开关选择"
      docs={<Docs components={mdxComponents} />}
    >
      <div className="grid gap-4">
        <div className="flex items-center gap-2">
          <Checkbox id="terms" defaultChecked />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="updates" />
          <Label htmlFor="updates">Email me updates</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="disabled" disabled />
          <Label htmlFor="disabled">Disabled option</Label>
        </div>
      </div>
    </ComponentPage>
  )
}
