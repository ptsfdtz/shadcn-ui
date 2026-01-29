import type { ReactNode } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"] as const

type ComponentPageProps = {
  title: string
  description?: string
  children: ReactNode
}

export function ComponentPage({
  title,
  description,
  children,
}: ComponentPageProps) {
  return (
    <Card className="mx-auto w-full max-w-2xl">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <Separator />
      <CardContent className="pt-6">{children}</CardContent>
      <CardFooter className="justify-between">
        <div className="text-muted-foreground text-xs">shadcn-ui demo</div>
        <Badge variant="secondary">{title}</Badge>
      </CardFooter>
    </Card>
  )
}

export function AlertDialogPreview() {
  return (
    <ComponentPage
      title="Alert Dialog"
      description="Modal confirmation with actions"
    >
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Open dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm action</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. Continue?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </ComponentPage>
  )
}

export function BadgePreview() {
  return (
    <ComponentPage title="Badge" description="Status & labels">
      <div className="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    </ComponentPage>
  )
}

export function ButtonPreview() {
  return (
    <ComponentPage title="Button" description="Actions and primary CTA">
      <div className="flex flex-wrap gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
    </ComponentPage>
  )
}

export function CardPreview() {
  return (
    <ComponentPage title="Card" description="Content grouping">
      <Card className="shadow-none">
        <CardHeader>
          <CardTitle>Starter plan</CardTitle>
          <CardDescription>For solo builders and small teams</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-semibold">$12</div>
          <div className="text-muted-foreground text-sm">per month</div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Choose plan</Button>
        </CardFooter>
      </Card>
    </ComponentPage>
  )
}

export function ComboboxPreview() {
  return (
    <ComponentPage title="Combobox" description="Searchable select">
      <Combobox items={frameworks}>
        <ComboboxInput placeholder="Select a framework" />
        <ComboboxContent>
          <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </ComponentPage>
  )
}

export function FieldPreview() {
  return (
    <ComponentPage title="Field" description="Grouped inputs">
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
  )
}

export function InputPreview() {
  return (
    <ComponentPage title="Input" description="Text input">
      <div className="grid gap-3">
        <Input placeholder="Default input" />
        <Input placeholder="Disabled input" disabled />
      </div>
    </ComponentPage>
  )
}

export function InputGroupPreview() {
  return (
    <ComponentPage title="Input Group" description="Composite inputs">
      <div className="grid gap-3">
        <InputGroup>
          <InputGroupAddon>@</InputGroupAddon>
          <InputGroupInput placeholder="username" />
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="Search" />
          <InputGroupAddon>⌘K</InputGroupAddon>
        </InputGroup>
      </div>
    </ComponentPage>
  )
}

export function SelectPreview() {
  return (
    <ComponentPage title="Select" description="Option selection">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Pick a plan" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="starter">Starter</SelectItem>
          <SelectItem value="pro">Pro</SelectItem>
          <SelectItem value="enterprise">Enterprise</SelectItem>
        </SelectContent>
      </Select>
    </ComponentPage>
  )
}

export function SeparatorPreview() {
  return (
    <ComponentPage title="Separator" description="Visual divider">
      <div className="flex items-center gap-4">
        <div className="text-sm">Left</div>
        <Separator className="flex-1" />
        <div className="text-sm">Right</div>
      </div>
    </ComponentPage>
  )
}

export function TextareaPreview() {
  return (
    <ComponentPage title="Textarea" description="Multi-line input">
      <Textarea placeholder="Write something..." rows={5} />
    </ComponentPage>
  )
}
