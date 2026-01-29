import { ComponentPage } from '@/components/docs/component-page';
import { mdxComponents } from '@/components/docs/mdx-components';
import Docs from '@/docs/components/aspect-ratio.mdx';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export function AspectRatioPreview() {
  return (
    <ComponentPage title="Aspect Ratio" description="用于保持媒体比例" docs={<Docs components={mdxComponents} />}>
      <div className="relative mx-auto w-full max-w-md">
        <AspectRatio ratio={16 / 9}>
          <div className="bg-muted text-muted-foreground flex h-full w-full items-center justify-center rounded-md text-sm">16:9</div>
        </AspectRatio>
      </div>
    </ComponentPage>
  );
}
