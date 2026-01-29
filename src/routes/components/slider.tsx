import { ComponentPage } from '@/components/docs/component-page';
import { mdxComponents } from '@/components/docs/mdx-components';
import Docs from '@/docs/components/slider.mdx';
import { Slider } from '@/components/ui/slider';

export function SliderPreview() {
  return (
    <ComponentPage title="Slider" description="用于范围或数值调整" docs={<Docs components={mdxComponents} />}>
      <Slider defaultValue={[75]} max={100} step={1} className="mx-auto w-full max-w-xs" />
    </ComponentPage>
  );
}
