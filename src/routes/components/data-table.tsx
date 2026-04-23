import { ArrowUpDownIcon } from 'lucide-react';
import type { ColumnDef } from '@tanstack/react-table';

import { ComponentPage } from '@/components/docs/component-page';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';

type Invoice = {
  id: string;
  customer: string;
  email: string;
  status: 'Paid' | 'Pending' | 'Refunded';
  amount: number;
};

const invoices: Invoice[] = [
  { id: 'INV-001', customer: 'Acme Labs', email: 'finance@acme.test', status: 'Paid', amount: 1240 },
  { id: 'INV-002', customer: 'Northwind', email: 'ops@northwind.test', status: 'Pending', amount: 890 },
  { id: 'INV-003', customer: 'Bluebird Studio', email: 'hello@bluebird.test', status: 'Refunded', amount: 320 },
  { id: 'INV-004', customer: 'Sora Health', email: 'billing@sora.test', status: 'Paid', amount: 2215 },
  { id: 'INV-005', customer: 'Lumen Retail', email: 'store@lumen.test', status: 'Pending', amount: 1475 },
  { id: 'INV-006', customer: 'Horizon AI', email: 'accounts@horizon.test', status: 'Paid', amount: 2980 },
];

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const columns: ColumnDef<Invoice>[] = [
  {
    accessorKey: 'customer',
    header: ({ column }) => (
      <Button variant="ghost" size="sm" className="-ml-3" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Customer
        <ArrowUpDownIcon />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="space-y-0.5">
        <div className="font-medium">{row.original.customer}</div>
        <div className="text-xs text-muted-foreground">{row.original.email}</div>
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <Badge variant="secondary">{row.original.status}</Badge>,
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => (
      <div className="flex justify-end">
        <Button variant="ghost" size="sm" className="-mr-3" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Amount
          <ArrowUpDownIcon />
        </Button>
      </div>
    ),
    cell: ({ row }) => <div className="text-right font-medium">{currencyFormatter.format(row.original.amount)}</div>,
  },
];

export function DataTablePreview() {
  return (
    <ComponentPage
      title="Data Table"
      description="Interactive tables with sorting, filtering, column visibility, and pagination."
      docs={
        <div className="space-y-3">
          <p>
            The official shadcn/ui docs treat data tables as a recipe built on top of the base table styles rather than a single generated primitive.
          </p>
          <p>
            This demo follows that pattern with TanStack Table, so the behavior stays flexible while the visuals stay aligned with the rest of the
            library.
          </p>
        </div>
      }
    >
      <DataTable columns={columns} data={invoices} searchColumn="customer" searchPlaceholder="Filter customers..." />
    </ComponentPage>
  );
}
