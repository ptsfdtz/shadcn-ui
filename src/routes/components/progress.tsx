import { ComponentPage } from "@/components/docs/component-page"
import { mdxComponents } from "@/components/docs/mdx-components"
import Docs from "@/docs/components/progress.mdx"
import { Progress } from "@/components/ui/progress"

export function ProgressPreview() {
  return (
    <ComponentPage
      title="Progress"
      description="用于展示进度"
      docs={<Docs components={mdxComponents} />}
    >
      <div className="w-full space-y-2">
        <Progress value={66} />
        <div className="text-muted-foreground text-xs">66% complete</div>
      </div>
    </ComponentPage>
  )
}
