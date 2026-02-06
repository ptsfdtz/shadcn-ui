import { ComponentPage } from '@/components/docs/component-page';
import { mdxComponents } from '@/components/docs/mdx-components';
import Docs from '@/docs/components/table.mdx';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const rows = [
  { name: 'Basic', status: 'Active', seats: 3 },
  { name: 'Pro', status: 'Active', seats: 10 },
  { name: 'Enterprise', status: 'Pending', seats: 25 },
];

export function TablePreview() {
  return (
    <ComponentPage title="Table" description="用于展示结构化数据" docs={<Docs components={mdxComponents} />}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Plan</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Seats</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell className="text-right">{row.seats}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ComponentPage>
  );
}
