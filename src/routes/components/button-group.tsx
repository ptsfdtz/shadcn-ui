import { ComponentPage } from "@/components/docs/component-page"
import { mdxComponents } from "@/components/docs/mdx-components"
import Docs from "@/docs/components/button-group.mdx"
import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
import { AlignLeftIcon, AlignCenterIcon, AlignRightIcon } from "lucide-react"

export function ButtonGroupPreview() {
  return (
    <ComponentPage
      title="Button Group"
      description="用于组合相关按钮"
      docs={<Docs components={mdxComponents} />}
    >
      <div className="flex flex-col gap-4">
        <ButtonGroup>
          <Button variant="outline">Daily</Button>
          <Button variant="outline">Weekly</Button>
          <Button variant="outline">Monthly</Button>
        </ButtonGroup>
        <ButtonGroup>
          <ButtonGroupText>Align</ButtonGroupText>
          <ButtonGroupSeparator />
          <Button variant="outline" size="icon">
            <AlignLeftIcon />
          </Button>
          <Button variant="outline" size="icon">
            <AlignCenterIcon />
          </Button>
          <Button variant="outline" size="icon">
            <AlignRightIcon />
          </Button>
        </ButtonGroup>
      </div>
    </ComponentPage>
  )
}
