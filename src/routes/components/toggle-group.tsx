import { ComponentPage } from "@/components/docs/component-page"
import { mdxComponents } from "@/components/docs/mdx-components"
import Docs from "@/docs/components/toggle-group.mdx"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

export function ToggleGroupPreview() {
  return (
    <ComponentPage
      title="Toggle Group"
      description="用于一组切换选项"
      docs={<Docs components={mdxComponents} />}
    >
      <ToggleGroup type="multiple" spacing={1}>
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <BoldIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <ItalicIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <UnderlineIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </ComponentPage>
  )
}
