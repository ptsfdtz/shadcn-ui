import { ComponentPage } from "@/components/docs/component-page"
import { mdxComponents } from "@/components/docs/mdx-components"
import Docs from "@/docs/components/input-group.mdx"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

export function InputGroupPreview() {
  return (
    <ComponentPage
      title="Input Group"
      description="组合输入"
      docs={<Docs components={mdxComponents} />}
    >
      <div className="grid gap-3">
        <InputGroup>
          <InputGroupAddon>@</InputGroupAddon>
          <InputGroupInput placeholder="username" />
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="Search" />
          <InputGroupAddon>⌘K</InputGroupAddon>
        </InputGroup>
      </div>
    </ComponentPage>
  )
}
