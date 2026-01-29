import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts"

import { ComponentPage } from "@/components/docs/component-page"
import { mdxComponents } from "@/components/docs/mdx-components"
import Docs from "@/docs/components/chart.mdx"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const data = [
  { month: "Jan", desktop: 420, mobile: 280 },
  { month: "Feb", desktop: 380, mobile: 260 },
  { month: "Mar", desktop: 510, mobile: 340 },
  { month: "Apr", desktop: 470, mobile: 320 },
  { month: "May", desktop: 530, mobile: 360 },
]

const config = {
  desktop: {
    label: "Desktop",
    color: "oklch(0.62 0.21 259.8)",
  },
  mobile: {
    label: "Mobile",
    color: "oklch(0.81 0.10 251.8)",
  },
} satisfies ChartConfig

export function ChartPreview() {
  return (
    <ComponentPage
      title="Chart"
      description="数据可视化图表"
      docUrl="https://ui.shadcn.com/docs/components/chart"
      docs={<Docs components={mdxComponents} />}
    >
      <ChartContainer config={config} className="h-64 w-full">
        <BarChart data={data}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </ComponentPage>
  )
}
