import { ComponentPage } from '@/components/docs/component-page';
import { mdxComponents } from '@/components/docs/mdx-components';
import Docs from '@/docs/components/navigation-menu.mdx';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export function NavigationMenuPreview() {
  return (
    <ComponentPage title="Navigation Menu" description="用于导航下拉菜单" docs={<Docs components={mdxComponents} />}>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Guides</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-2 p-4 md:w-[360px]">
                <NavigationMenuLink href="#" className="font-medium">
                  Installation
                </NavigationMenuLink>
                <NavigationMenuLink href="#">Configuration</NavigationMenuLink>
                <NavigationMenuLink href="#">API Reference</NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" className="px-4 py-2">
              Documentation
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </ComponentPage>
  );
}
