import * as React from 'react';
import { createHighlighterCore, type HighlighterCore } from 'shiki/core';
import getWasmInstance from 'shiki/wasm';
import githubLight from 'shiki/themes/github-light.mjs';
import githubDark from 'shiki/themes/github-dark.mjs';
import tsx from 'shiki/langs/tsx.mjs';
import ts from 'shiki/langs/ts.mjs';
import jsx from 'shiki/langs/jsx.mjs';
import js from 'shiki/langs/javascript.mjs';
import json from 'shiki/langs/json.mjs';
import bash from 'shiki/langs/bash.mjs';
import css from 'shiki/langs/css.mjs';
import html from 'shiki/langs/html.mjs';
import md from 'shiki/langs/markdown.mjs';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { FaCheck, FaCopy } from 'react-icons/fa';

type CodeBlockProps = {
  code: string;
  language?: string;
};

const supportedLanguages = ['tsx', 'ts', 'jsx', 'js', 'json', 'bash', 'css', 'html', 'md'] as const;

const languageMap = {
  tsx,
  ts,
  jsx,
  js,
  json,
  bash,
  css,
  html,
  md,
} as const;

let highlighterPromise: Promise<HighlighterCore> | null = null;

function getHighlighterInstance() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighterCore({
      themes: [githubLight, githubDark],
      langs: Object.values(languageMap),
      loadWasm: getWasmInstance,
    });
  }
  return highlighterPromise;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [html, setHtml] = React.useState<string>('');
  const [copied, setCopied] = React.useState(false);
  const [tooltipOpen, setTooltipOpen] = React.useState(false);
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
    const lang = supportedLanguages.includes((language ?? '') as (typeof supportedLanguages)[number]) ? (language ?? 'tsx') : 'tsx';
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
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTooltipOpen(true);
    } catch {
      setCopied(false);
    }
  };

  if (!html) {
    return (
      <div className="relative">
        <Tooltip open={tooltipOpen} onOpenChange={setTooltipOpen}>
          <TooltipTrigger asChild>
            <Button type="button" variant="ghost" size="icon" onClick={handleCopy} aria-label={copied ? 'Copied!' : 'Copy'}>
              {copied ? <FaCheck /> : <FaCopy />}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" sideOffset={6}>
            {copied ? 'Copied!' : 'Copy'}
          </TooltipContent>
        </Tooltip>
        <pre className="bg-muted/40 border rounded-md p-3 text-xs overflow-x-auto font-mono">
          <code className="font-mono text-xs">{code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div className="relative">
      <Tooltip open={tooltipOpen} onOpenChange={setTooltipOpen}>
        <TooltipTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon-lg"
            onClick={handleCopy}
            className="absolute right-2 top-2 z-10"
            aria-label={copied ? 'Copied!' : 'Copy'}
          >
            {copied ? <FaCheck /> : <FaCopy />}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top" sideOffset={6}>
          {copied ? 'Copied!' : 'Copy'}
        </TooltipContent>
      </Tooltip>
      <div
        className="text-sm overflow-x-auto font-mono [&_pre]:m-0 [&_pre]:rounded-md [&_pre]:border [&_pre]:border-muted [&_pre]:p-3 [&_pre]:font-mono [&_code]:font-mono mt-3"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
