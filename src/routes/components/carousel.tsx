import { ComponentPage } from "@/components/docs/component-page"
import { mdxComponents } from "@/components/docs/mdx-components"
import Docs from "@/docs/components/carousel.mdx"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPreview() {
  return (
    <ComponentPage
      title="Carousel"
      description="用于轮播展示内容"
      docUrl="https://ui.shadcn.com/docs/components/carousel"
      docs={<Docs components={mdxComponents} />}
    >
      <div className="relative w-full max-w-md">
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="bg-muted text-muted-foreground flex h-40 items-center justify-center rounded-lg text-2xl font-semibold">
                  {index + 1}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </ComponentPage>
  )
}
