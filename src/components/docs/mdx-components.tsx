import type * as React from 'react';

import { CodeBlock } from '@/components/docs/code-block';

export const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="text-base font-semibold mt-2 first:mt-0" {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="text-sm font-semibold mt-2 first:mt-0" {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="text-sm text-foreground/90 mt-2" {...props} />,
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="list-disc pl-5 text-sm text-foreground/90 mt-2" {...props} />,
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => <ol className="list-decimal pl-5 text-sm text-foreground/90 mt-2" {...props} />,
  li: (props: React.HTMLAttributes<HTMLLIElement>) => <li className="mt-1" {...props} />,
  pre: (props: React.PropsWithChildren<React.HTMLAttributes<HTMLPreElement>>) => {
    const child = props.children as React.ReactElement<{ children?: string; className?: string }> | undefined;
    const code = typeof child?.props?.children === 'string' ? child.props.children : '';
    const className = typeof child?.props?.className === 'string' ? child.props.className : '';
    const match = className.match(/language-([\w-]+)/);
    const language = match?.[1];

    if (code) {
      return <CodeBlock code={code} language={language} />;
    }

    return <pre className="bg-muted/40 border rounded-md p-3 text-xs overflow-x-auto mt-3" {...props} />;
  },
  code: (props: React.HTMLAttributes<HTMLElement>) => <code className="font-mono text-xs" {...props} />,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a className="text-primary underline underline-offset-4" {...props} />,
};
