import { ComponentPage } from "@/components/docs/component-page"
import { mdxComponents } from "@/components/docs/mdx-components"
import Docs from "@/docs/components/combobox.mdx"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"] as const

export function ComboboxPreview() {
  return (
    <ComponentPage
      title="Combobox"
      description="可搜索的下拉选择"
      docUrl="https://ui.shadcn.com/docs/components/combobox"
      docs={<Docs components={mdxComponents} />}
    >
      <Combobox items={frameworks}>
        <ComboboxInput placeholder="Select a framework" />
        <ComboboxContent>
          <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </ComponentPage>
  )
}
