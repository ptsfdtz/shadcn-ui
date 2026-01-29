import { ComponentPage } from "@/components/docs/component-page"
import { mdxComponents } from "@/components/docs/mdx-components"
import Docs from "@/docs/components/select.mdx"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectPreview() {
  return (
    <ComponentPage
      title="Select"
      description="下拉选择"
      docUrl="https://ui.shadcn.com/docs/components/select"
      docs={<Docs components={mdxComponents} />}
    >
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Pick a plan" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="starter">Starter</SelectItem>
          <SelectItem value="pro">Pro</SelectItem>
          <SelectItem value="enterprise">Enterprise</SelectItem>
        </SelectContent>
      </Select>
    </ComponentPage>
  )
}
