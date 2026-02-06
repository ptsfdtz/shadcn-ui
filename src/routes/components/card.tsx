import { ComponentPage } from '@/components/docs/component-page';
import { mdxComponents } from '@/components/docs/mdx-components';
import Docs from '@/docs/components/card.mdx';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export function CardPreview() {
  return (
    <ComponentPage title="Card" description="用于内容分组与承载" docs={<Docs components={mdxComponents} />}>
      <Card className="shadow-none">
        <CardHeader>
          <CardTitle>Starter plan</CardTitle>
          <CardDescription>For solo builders and small teams</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-semibold">$12</div>
          <div className="text-muted-foreground text-sm">per month</div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Choose plan</Button>
        </CardFooter>
      </Card>
    </ComponentPage>
  );
}
