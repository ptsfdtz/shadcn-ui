import * as React from 'react';

import { ComponentPage } from '@/components/docs/component-page';
import { mdxComponents } from '@/components/docs/mdx-components';
import Docs from '@/docs/components/calendar.mdx';
import { Calendar } from '@/components/ui/calendar';

export function CalendarPreview() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <ComponentPage
      title="Calendar"
      description="用于日期选择"
      docUrl="https://ui.shadcn.com/docs/components/calendar"
      docs={<Docs components={mdxComponents} />}
    >
      <Calendar mode="single" selected={date} onSelect={setDate} />
    </ComponentPage>
  );
}
