import { ComponentPage } from "@/components/docs/component-page"
import { mdxComponents } from "@/components/docs/mdx-components"
import Docs from "@/docs/components/hover-card.mdx"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverCardPreview() {
  return (
    <ComponentPage
      title="Hover Card"
      description="用于悬停时显示补充信息"
      docs={<Docs components={mdxComponents} />}
    >
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">Hover me</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="space-y-1">
            <div className="text-sm font-medium">Design System</div>
            <p className="text-muted-foreground text-sm">
              Build consistent UIs with reusable primitives.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </ComponentPage>
  )
}
