import { ComponentPage } from "@/components/docs/component-page"
import { mdxComponents } from "@/components/docs/mdx-components"
import Docs from "@/docs/components/tabs.mdx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsPreview() {
  return (
    <ComponentPage
      title="Tabs"
      description="用于内容分组切换"
      docs={<Docs components={mdxComponents} />}
    >
      <Tabs defaultValue="account" className="w-full">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Account settings.</TabsContent>
        <TabsContent value="billing">Manage billing preferences.</TabsContent>
        <TabsContent value="team">Invite your team members.</TabsContent>
      </Tabs>
    </ComponentPage>
  )
}
