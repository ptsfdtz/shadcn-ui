import { ComponentPage } from "@/components/docs/component-page"
import { mdxComponents } from "@/components/docs/mdx-components"
import Docs from "@/docs/components/tooltip.mdx"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipPreview() {
  return (
    <ComponentPage
      title="Tooltip"
      description="Hover hints for UI controls"
      docs={<Docs components={mdxComponents} />}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent side="top" sideOffset={6}>
          Quick tip
        </TooltipContent>
      </Tooltip>
    </ComponentPage>
  )
}
