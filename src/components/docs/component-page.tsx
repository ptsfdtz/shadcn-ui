import * as React from 'react';
import type { ReactNode } from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react';
import { FaCheck, FaCopy } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { componentItems } from '@/lib/registry';

type ComponentPageProps = {
  title?: string;
  description?: string;
  children: ReactNode;
  docs?: ReactNode;
  docUrl?: string | null;
};

export function ComponentPage({ title, description, children, docs, docUrl }: ComponentPageProps) {
  const [manager, setManager] = React.useState<'pnpm' | 'npm' | 'yarn' | 'bun'>('pnpm');
  const [copied, setCopied] = React.useState(false);
  const [tooltipOpen, setTooltipOpen] = React.useState(false);
  const location = useLocation();
  const currentItem = React.useMemo(
    () => componentItems.find(item => item.path === location.pathname),
    [location.pathname]
  );
  const resolvedTitle = title ?? currentItem?.name ?? 'Component';
  const slug = resolvedTitle
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
  const resolvedDocUrl =
    docUrl === null ? null : docUrl ?? `https://ui.shadcn.com/docs/components/${slug}`;
  const currentIndex = React.useMemo(
    () => componentItems.findIndex(item => item.path === location.pathname),
    [location.pathname]
  );
  const prevItem = currentIndex > 0 ? componentItems[currentIndex - 1] : null;
  const nextItem =
    currentIndex >= 0 && currentIndex < componentItems.length - 1
      ? componentItems[currentIndex + 1]
      : null;

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

  React.useEffect(() => {
    document.title = resolvedTitle;
  }, [resolvedTitle]);

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
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <CardTitle>{resolvedTitle}</CardTitle>
              {description && <CardDescription>{description}</CardDescription>}
            </div>
            {resolvedDocUrl && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="button" variant="ghost" size="icon-sm" asChild aria-label="官方文档">
                    <a href={resolvedDocUrl} target="_blank" rel="noreferrer">
                      <ArrowUpRightIcon />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={6}>
                  官方文档
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </CardHeader>
        <Separator />
        <CardContent>{children}</CardContent>
        <CardFooter className="justify-between">
          <div className="text-muted-foreground text-xs">Demo</div>
          <Badge variant="secondary">{resolvedTitle}</Badge>
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
      {(prevItem || nextItem) && (
        <div className="flex items-center justify-between">
          {prevItem ? (
            <Button variant="outline" size="sm" asChild>
              <Link to={prevItem.path} className="gap-2">
                <ArrowLeftIcon />
                {prevItem.name}
              </Link>
            </Button>
          ) : (
            <span />
          )}
          {nextItem && (
            <Button variant="outline" size="sm" asChild>
              <Link to={nextItem.path} className="gap-2">
                {nextItem.name}
                <ArrowRightIcon />
              </Link>
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
