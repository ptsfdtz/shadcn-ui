import { ComponentPage } from '@/components/docs/component-page';
import { Separator } from '@/components/ui/separator';

export function TypographyPreview() {
  return (
    <ComponentPage
      title="Typography"
      description="A practical set of text styles built with utilities instead of a generated component file."
      docs={
        <div className="space-y-3">
          <p>
            Typography is intentionally lightweight in shadcn/ui. The docs provide utility-based patterns rather than shipping a dedicated primitive.
          </p>
          <p>This page adds a ready-to-copy reference so the showcase stays aligned with the current official guidance.</p>
        </div>
      }
    >
      <article className="space-y-6">
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">Design words that earn their space</h1>
          <p className="text-xl text-muted-foreground">
            Use clear hierarchy, steady rhythm, and intentional emphasis so long-form UI copy remains easy to scan.
          </p>
        </div>

        <Separator />

        <section className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Body copy</h2>
          <p className="leading-7">
            Good interface text does more than fill empty areas. It explains state changes, reduces hesitation, and helps people move through a
            product without needing extra instruction.
          </p>
          <p className="leading-7">
            Keep paragraphs tight, let headings carry structure, and reserve bold emphasis for information that genuinely changes what someone should
            notice or do next.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Lists and callouts</h3>
          <ul className="my-6 ml-6 list-disc space-y-2 [&>li]:mt-2">
            <li>Lead with the action or outcome people care about.</li>
            <li>Prefer short, concrete words over decorative filler.</li>
            <li>Keep adjacent labels visually distinct from supporting copy.</li>
          </ul>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            Typography is not a separate layer after the layout is done. It is part of the layout.
          </blockquote>
        </section>

        <section className="space-y-4">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Inline emphasis</h4>
          <p className="leading-7">
            Pair regular text with <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">code</code>,{' '}
            <span className="font-semibold">strong emphasis</span>, and <span className="text-muted-foreground">muted support text</span> so meaning
            stays obvious without relying on color alone.
          </p>
        </section>
      </article>
    </ComponentPage>
  );
}
