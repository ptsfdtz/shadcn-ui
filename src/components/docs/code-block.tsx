import * as React from 'react';
import { getHighlighter, type Highlighter } from 'shiki';

type CodeBlockProps = {
  code: string;
  language?: string;
};

const supportedLanguages = ['tsx', 'ts', 'jsx', 'js', 'json', 'bash', 'css', 'html', 'md'];

let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighterInstance() {
  if (!highlighterPromise) {
    highlighterPromise = getHighlighter({
      themes: ['github-light', 'github-dark'],
      langs: supportedLanguages,
    });
  }
  return highlighterPromise;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [html, setHtml] = React.useState<string>('');
  const [isDark, setIsDark] = React.useState<boolean>(() => document.documentElement.classList.contains('dark'));

  React.useEffect(() => {
    const target = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDark(target.classList.contains('dark'));
    });
    observer.observe(target, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    let cancelled = false;
    const lang = supportedLanguages.includes(language ?? '') ? (language ?? 'tsx') : 'tsx';
    const theme = isDark ? 'github-dark' : 'github-light';

    getHighlighterInstance()
      .then(highlighter => highlighter.codeToHtml(code.trimEnd(), { lang, theme }))
      .then(result => {
        if (!cancelled) {
          setHtml(result);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setHtml('');
        }
      });

    return () => {
      cancelled = true;
    };
  }, [code, language, isDark]);

  if (!html) {
    return (
      <pre className="bg-muted/40 border rounded-md p-3 text-xs overflow-x-auto">
        <code className="font-mono text-xs">{code}</code>
      </pre>
    );
  }

  return (
    <div
      className="text-sm overflow-x-auto [&_pre]:m-0 [&_pre]:rounded-md [&_pre]:border [&_pre]:border-muted [&_pre]:p-3"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
