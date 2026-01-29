import type * as React from 'react';

export const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="text-base font-semibold mt-2 first:mt-0" {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="text-sm font-semibold mt-2 first:mt-0" {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="text-sm text-foreground/90 mt-2" {...props} />,
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="list-disc pl-5 text-sm text-foreground/90 mt-2" {...props} />,
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => <ol className="list-decimal pl-5 text-sm text-foreground/90 mt-2" {...props} />,
  li: (props: React.HTMLAttributes<HTMLLIElement>) => <li className="mt-1" {...props} />,
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => <pre className="bg-muted/40 border rounded-md p-3 text-xs overflow-x-auto mt-3" {...props} />,
  code: (props: React.HTMLAttributes<HTMLElement>) => <code className="font-mono text-xs" {...props} />,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a className="text-primary underline underline-offset-4" {...props} />,
};
