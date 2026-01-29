import * as React from "react"

import { ComponentPage } from "@/components/docs/component-page"
import { mdxComponents } from "@/components/docs/mdx-components"
import Docs from "@/docs/components/collapsible.mdx"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"

export function CollapsiblePreview() {
  const [open, setOpen] = React.useState(false)

  return (
    <ComponentPage
      title="Collapsible"
      description="用于展开或收起内容"
      docs={<Docs components={mdxComponents} />}
    >
      <div className="w-full max-w-md space-y-3">
        <Collapsible open={open} onOpenChange={setOpen}>
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">Project details</div>
            <CollapsibleTrigger asChild>
              <Button variant="outline" size="sm">
                {open ? "Hide" : "Show"}
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="text-muted-foreground text-sm">
            This panel contains additional information and metadata for the
            project.
          </CollapsibleContent>
        </Collapsible>
      </div>
    </ComponentPage>
  )
}
