import * as React from 'react';

import { ComponentPage } from '@/components/docs/component-page';
import { mdxComponents } from '@/components/docs/mdx-components';
import Docs from '@/docs/components/date-picker.mdx';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { ChevronDownIcon } from 'lucide-react';

export function DatePickerPreview() {
  const [date, setDate] = React.useState<Date>();

  return (
    <ComponentPage
      title="Date Picker"
      description="用于选择日期"
      docUrl="https://ui.shadcn.com/docs/components/date-picker"
      docs={<Docs components={mdxComponents} />}
    >
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            data-empty={!date}
            className="data-[empty=true]:text-muted-foreground w-[212px] justify-between text-left font-normal"
          >
            {date ? format(date, 'PPP') : <span>Pick a date</span>}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar mode="single" selected={date} onSelect={setDate} defaultMonth={date} />
        </PopoverContent>
      </Popover>
    </ComponentPage>
  );
}
