import * as React from 'react';

import { ComponentPage } from '@/components/docs/component-page';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { DirectionProvider } from '@/components/ui/direction';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

type ReadingDirection = 'ltr' | 'rtl';

const contentByDirection: Record<
  ReadingDirection,
  {
    title: string;
    subtitle: string;
    name: string;
    save: string;
    cancel: string;
    breadcrumb: [string, string, string];
  }
> = {
  ltr: {
    title: 'Project settings',
    subtitle: 'Switch the provider to verify how Radix-based primitives behave in left-to-right and right-to-left layouts.',
    name: 'Amina Haddad',
    save: 'Save changes',
    cancel: 'Cancel',
    breadcrumb: ['Dashboard', 'Workspace', 'Settings'],
  },
  rtl: {
    title: 'إعدادات المشروع',
    subtitle: 'بدّل اتجاه القراءة لمراجعة سلوك المكوّنات المبنية على Radix في الواجهات من اليمين إلى اليسار.',
    name: 'أمينة حداد',
    save: 'حفظ التغييرات',
    cancel: 'إلغاء',
    breadcrumb: ['لوحة التحكم', 'مساحة العمل', 'الإعدادات'],
  },
};

export function DirectionPreview() {
  const [direction, setDirection] = React.useState<ReadingDirection>('ltr');
  const content = contentByDirection[direction];

  return (
    <ComponentPage
      title="Direction"
      description="Provide left-to-right or right-to-left context for Radix-based components."
      docs={
        <div className="space-y-3">
          <p>Direction is a small provider, but it matters when your app needs Arabic, Hebrew, Persian, or any other right-to-left experience.</p>
          <p>
            This preview applies both the shadcn direction provider and the DOM `dir` attribute so layout, text flow, and primitives stay in sync.
          </p>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Button variant={direction === 'ltr' ? 'default' : 'outline'} onClick={() => setDirection('ltr')}>
            LTR
          </Button>
          <Button variant={direction === 'rtl' ? 'default' : 'outline'} onClick={() => setDirection('rtl')}>
            RTL
          </Button>
        </div>

        <DirectionProvider direction={direction}>
          <div dir={direction} className="overflow-hidden rounded-lg border">
            <div className="space-y-5 p-4">
              <div className={cn('space-y-1', direction === 'rtl' && 'text-right')}>
                <h3 className="text-lg font-semibold">{content.title}</h3>
                <p className="text-sm text-muted-foreground">{content.subtitle}</p>
              </div>

              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">{content.breadcrumb[0]}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">{content.breadcrumb[1]}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{content.breadcrumb[2]}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <div className="grid gap-4 md:grid-cols-2">
                <div className={cn('space-y-2', direction === 'rtl' && 'text-right')}>
                  <Label htmlFor="direction-name">Name</Label>
                  <Input id="direction-name" defaultValue={content.name} />
                </div>
                <div className={cn('space-y-2', direction === 'rtl' && 'text-right')}>
                  <Label htmlFor="direction-language">Language</Label>
                  <Select defaultValue={direction}>
                    <SelectTrigger id="direction-language" className="w-full">
                      <SelectValue placeholder="Select a language direction" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ltr">Left to right</SelectItem>
                      <SelectItem value="rtl">Right to left</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className={cn('flex flex-wrap gap-2', direction === 'rtl' && 'justify-end')}>
                <Button variant="outline">{content.cancel}</Button>
                <Button>{content.save}</Button>
              </div>
            </div>
          </div>
        </DirectionProvider>
      </div>
    </ComponentPage>
  );
}
