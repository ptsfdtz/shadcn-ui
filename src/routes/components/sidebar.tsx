import { FolderKanbanIcon, LayoutDashboardIcon, MessageSquareTextIcon, Settings2Icon, SparklesIcon } from 'lucide-react';

import { ComponentPage } from '@/components/docs/component-page';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
} from '@/components/ui/sidebar';

const items = [
  { label: 'Dashboard', icon: LayoutDashboardIcon, current: true },
  { label: 'Projects', icon: FolderKanbanIcon, badge: '12' },
  { label: 'Messages', icon: MessageSquareTextIcon, badge: '4' },
  { label: 'Settings', icon: Settings2Icon },
];

export function SidebarPreview() {
  return (
    <ComponentPage
      title="Sidebar"
      description="Composable application navigation for desktop shells and mobile drawers."
      docs={
        <div className="space-y-3">
          <p>
            The official sidebar is meant to live at the app-shell level, where it can manage desktop collapse, mobile sheets, keyboard shortcuts, and
            layout spacing.
          </p>
          <p>
            This embedded preview keeps `collapsible="none"` so the component stays bounded inside the docs page while still showing the full
            composition API.
          </p>
        </div>
      }
    >
      <div className="overflow-hidden rounded-lg border">
        <SidebarProvider className="min-h-[440px]">
          <Sidebar collapsible="none" className="border-r">
            <SidebarHeader>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    size="lg"
                    isActive
                    className="data-[active=true]:bg-sidebar-primary data-[active=true]:text-sidebar-primary-foreground"
                  >
                    <SparklesIcon />
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">Studio</span>
                      <span className="truncate text-xs opacity-70">radix-vega</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Workspace</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {items.map(item => {
                      const Icon = item.icon;

                      return (
                        <SidebarMenuItem key={item.label}>
                          <SidebarMenuButton isActive={item.current}>
                            <Icon />
                            <span>{item.label}</span>
                          </SidebarMenuButton>
                          {item.badge ? <SidebarMenuBadge>{item.badge}</SidebarMenuBadge> : null}
                        </SidebarMenuItem>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>

            <SidebarSeparator />

            <SidebarFooter>
              <Card className="border-sidebar-border bg-sidebar-accent/40 shadow-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Pro plan</CardTitle>
                  <CardDescription>Early access to blocks, charts, and app-shell patterns.</CardDescription>
                </CardHeader>
              </Card>
            </SidebarFooter>
          </Sidebar>

          <SidebarInset className="min-h-[440px]">
            <div className="border-b px-4 py-3">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-medium">Team workspace</p>
                  <p className="text-sm text-muted-foreground">Use the sidebar primitives to compose your own app chrome.</p>
                </div>
                <Badge variant="secondary">Preview</Badge>
              </div>
            </div>

            <div className="grid gap-4 p-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Sidebar slots</CardTitle>
                  <CardDescription>Header, groups, footer, menu badges, and inset content are all first-class pieces.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  This makes it easier to keep navigation logic reusable while still designing custom application shells.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Built for real layouts</CardTitle>
                  <CardDescription>Desktop collapse, mobile drawer behavior, and cookie-backed persistence ship with the provider.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  In a full-screen app shell you can switch to `collapsible="icon"` or `collapsible="offcanvas"` to unlock the interactive modes.
                </CardContent>
              </Card>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </ComponentPage>
  );
}
