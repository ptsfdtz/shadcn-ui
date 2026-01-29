import { ComponentPage } from '@/components/docs/component-page';
import { mdxComponents } from '@/components/docs/mdx-components';
import Docs from '@/docs/components/field.mdx';
import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function FieldPreview() {
  return (
    <ComponentPage title="Field" description="表单字段与分组" docs={<Docs components={mdxComponents} />}>
      <form className="space-y-4">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="demo-name">Name</FieldLabel>
            <Input id="demo-name" placeholder="Enter your name" />
          </Field>
          <Field>
            <FieldLabel htmlFor="demo-role">Role</FieldLabel>
            <Select>
              <SelectTrigger id="demo-role">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="designer">Designer</SelectItem>
                <SelectItem value="developer">Developer</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </FieldGroup>
        <Button type="button">Save</Button>
      </form>
    </ComponentPage>
  );
}
