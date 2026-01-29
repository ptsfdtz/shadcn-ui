import { ComponentPage } from "@/components/docs/component-page"
import { mdxComponents } from "@/components/docs/mdx-components"
import Docs from "@/docs/components/item.mdx"
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"
import { BellIcon, ChevronRightIcon } from "lucide-react"

export function ItemPreview() {
  return (
    <ComponentPage
      title="Item"
      description="用于展示列表项或卡片条目"
      docs={<Docs components={mdxComponents} />}
    >
      <ItemGroup>
        <Item>
          <ItemMedia variant="icon">
            <BellIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Notifications</ItemTitle>
            <ItemDescription>Manage alerts and reminders.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button size="icon-sm" variant="ghost" aria-label="Open">
              <ChevronRightIcon />
            </Button>
          </ItemActions>
        </Item>
        <ItemSeparator />
        <Item>
          <ItemContent>
            <ItemTitle>Weekly report</ItemTitle>
            <ItemDescription>Last updated 2 hours ago.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button size="sm" variant="outline">
              View
            </Button>
          </ItemActions>
        </Item>
      </ItemGroup>
    </ComponentPage>
  )
}
