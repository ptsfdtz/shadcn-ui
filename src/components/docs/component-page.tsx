import * as React from 'react';
import type { ReactNode } from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { FaCheck, FaCopy } from 'react-icons/fa';

type ComponentPageProps = {
  title: string;
  description?: string;
  children: ReactNode;
  docs?: ReactNode;
};

export function ComponentPage({ title, description, children, docs }: ComponentPageProps) {
  const [manager, setManager] = React.useState<'pnpm' | 'npm' | 'yarn' | 'bun'>('pnpm');
  const [copied, setCopied] = React.useState(false);
  const [tooltipOpen, setTooltipOpen] = React.useState(false);
  const slug = title
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');

  const command = React.useMemo(() => {
    switch (manager) {
      case 'npm':
        return `npx shadcn@latest add ${slug}`;
      case 'yarn':
        return `yarn dlx shadcn@latest add ${slug}`;
      case 'bun':
        return `bunx shadcn@latest add ${slug}`;
      default:
        return `pnpm dlx shadcn@latest add ${slug}`;
    }
  }, [manager, slug]);

  React.useEffect(() => {
    if (!copied) {
      return;
    }
    const timer = window.setTimeout(() => {
      setCopied(false);
      setTooltipOpen(false);
    }, 1500);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTooltipOpen(true);
    } catch {
      setCopied(false);
    }
  };

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
          <div className="text-muted-foreground text-xs">示例</div>
          <Badge variant="secondary">{title}</Badge>
        </CardFooter>
      </Card>
      <Card>
        <CardContent>
          <div className="bg-muted/40 border rounded-md">
            <div className="flex items-center gap-2 border-b px-2 py-1.5">
              {(['pnpm', 'npm', 'yarn', 'bun'] as const).map(item => (
                <Button
                  key={item}
                  type="button"
                  size="xs"
                  variant={manager === item ? 'default' : 'ghost'}
                  onClick={() => setManager(item)}
                  className="px-2"
                >
                  {item}
                </Button>
              ))}
              <div className="ml-auto">
                <Tooltip open={tooltipOpen} onOpenChange={setTooltipOpen}>
                  <TooltipTrigger asChild>
                    <Button type="button" size="icon-xs" variant="ghost" onClick={handleCopy} aria-label={copied ? 'Copied!' : 'Copy'}>
                      {copied ? <FaCheck /> : <FaCopy />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" sideOffset={3}>
                    {copied ? 'Copied!' : 'Copy'}
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
            <div className="px-3 py-2 font-mono text-sm">{command}</div>
          </div>
        </CardContent>
      </Card>
      {docs && (
        <Card>
          <CardContent className="text-sm leading-6 text-foreground/90">{docs}</CardContent>
        </Card>
      )}
    </div>
  );
}
