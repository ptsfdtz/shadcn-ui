import { ComponentPage } from "@/components/docs/component-page"
import { mdxComponents } from "@/components/docs/mdx-components"
import Docs from "@/docs/components/native-select.mdx"
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"

export function NativeSelectPreview() {
  return (
    <ComponentPage
      title="Native Select"
      description="用于原生下拉选择"
      docs={<Docs components={mdxComponents} />}
    >
      <NativeSelect defaultValue="design">
        <NativeSelectOption value="design">Design</NativeSelectOption>
        <NativeSelectOption value="dev">Development</NativeSelectOption>
        <NativeSelectOption value="marketing">Marketing</NativeSelectOption>
      </NativeSelect>
    </ComponentPage>
  )
}
