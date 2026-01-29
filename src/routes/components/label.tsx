import { ComponentPage } from "@/components/docs/component-page"
import { mdxComponents } from "@/components/docs/mdx-components"
import Docs from "@/docs/components/label.mdx"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LabelPreview() {
  return (
    <ComponentPage
      title="Label"
      description="用于表单字段标注"
      docs={<Docs components={mdxComponents} />}
    >
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="name@example.com" />
      </div>
    </ComponentPage>
  )
}
