import { ComponentPage } from "@/components/docs/component-page"
import { mdxComponents } from "@/components/docs/mdx-components"
import Docs from "@/docs/components/skeleton.mdx"
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonPreview() {
  return (
    <ComponentPage
      title="Skeleton"
      description="用于加载时的占位骨架"
      docs={<Docs components={mdxComponents} />}
    >
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[220px]" />
          <Skeleton className="h-4 w-[180px]" />
        </div>
      </div>
    </ComponentPage>
  )
}
