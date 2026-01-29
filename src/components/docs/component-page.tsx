import type { ReactNode } from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

type ComponentPageProps = {
  title: string;
  description?: string;
  children: ReactNode;
  docs?: ReactNode;
};

export function ComponentPage({ title, description, children, docs }: ComponentPageProps) {
  return (
    <div className="mx-auto w-full max-w-2xl space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <Separator />
        <CardContent>{children}</CardContent>
        <CardFooter className="justify-between">
          <div className="text-muted-foreground text-xs">组件示例</div>
          <Badge variant="secondary">{title}</Badge>
        </CardFooter>
      </Card>
      {docs && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">文档</CardTitle>
            <CardDescription>用法与说明</CardDescription>
          </CardHeader>
          <Separator />
          <CardContent className="text-sm leading-6 text-foreground/90">{docs}</CardContent>
        </Card>
      )}
    </div>
  );
}
