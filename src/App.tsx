import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from '@/routes/+layout';
import { ErrrorPage } from '@/routes/+errror';
import { componentItems } from '@/lib/registry';
import {
  AccordionPreview,
  AlertPreview,
  AlertDialogPreview,
  AspectRatioPreview,
  AvatarPreview,
  BadgePreview,
  BreadcrumbPreview,
  ButtonPreview,
  ButtonGroupPreview,
  CalendarPreview,
  CardPreview,
  CarouselPreview,
  ChartPreview,
  CheckboxPreview,
  CollapsiblePreview,
  ComboboxPreview,
  CommandPreview,
  ContextMenuPreview,
  DatePickerPreview,
  DialogPreview,
  DrawerPreview,
  DropdownMenuPreview,
  EmptyPreview,
  FieldPreview,
  HoverCardPreview,
  InputPreview,
  InputGroupPreview,
  InputOtpPreview,
  ItemPreview,
  KbdPreview,
  LabelPreview,
  MenubarPreview,
  NativeSelectPreview,
  NavigationMenuPreview,
  PaginationPreview,
  PopoverPreview,
  ProgressPreview,
  RadioGroupPreview,
  ResizablePreview,
  ScrollAreaPreview,
  SelectPreview,
  SeparatorPreview,
  SheetPreview,
  SkeletonPreview,
  SliderPreview,
  SonnerPreview,
  SpinnerPreview,
  SwitchPreview,
  TablePreview,
  TabsPreview,
  TextareaPreview,
  TogglePreview,
  ToggleGroupPreview,
  TooltipPreview,
} from '@/routes/components';

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to={componentItems[0].path} replace />} />
          <Route path="/components/accordion" element={<AccordionPreview />} />
          <Route path="/components/alert" element={<AlertPreview />} />
          <Route path="/components/alert-dialog" element={<AlertDialogPreview />} />
          <Route path="/components/aspect-ratio" element={<AspectRatioPreview />} />
          <Route path="/components/avatar" element={<AvatarPreview />} />
          <Route path="/components/badge" element={<BadgePreview />} />
          <Route path="/components/breadcrumb" element={<BreadcrumbPreview />} />
          <Route path="/components/button" element={<ButtonPreview />} />
          <Route path="/components/button-group" element={<ButtonGroupPreview />} />
          <Route path="/components/calendar" element={<CalendarPreview />} />
          <Route path="/components/card" element={<CardPreview />} />
          <Route path="/components/carousel" element={<CarouselPreview />} />
          <Route path="/components/chart" element={<ChartPreview />} />
          <Route path="/components/checkbox" element={<CheckboxPreview />} />
          <Route path="/components/collapsible" element={<CollapsiblePreview />} />
          <Route path="/components/combobox" element={<ComboboxPreview />} />
          <Route path="/components/command" element={<CommandPreview />} />
          <Route path="/components/context-menu" element={<ContextMenuPreview />} />
          <Route path="/components/date-picker" element={<DatePickerPreview />} />
          <Route path="/components/dialog" element={<DialogPreview />} />
          <Route path="/components/drawer" element={<DrawerPreview />} />
          <Route path="/components/dropdown-menu" element={<DropdownMenuPreview />} />
          <Route path="/components/empty" element={<EmptyPreview />} />
          <Route path="/components/field" element={<FieldPreview />} />
          <Route path="/components/hover-card" element={<HoverCardPreview />} />
          <Route path="/components/input" element={<InputPreview />} />
          <Route path="/components/input-group" element={<InputGroupPreview />} />
          <Route path="/components/input-otp" element={<InputOtpPreview />} />
          <Route path="/components/item" element={<ItemPreview />} />
          <Route path="/components/kbd" element={<KbdPreview />} />
          <Route path="/components/label" element={<LabelPreview />} />
          <Route path="/components/menubar" element={<MenubarPreview />} />
          <Route path="/components/native-select" element={<NativeSelectPreview />} />
          <Route path="/components/navigation-menu" element={<NavigationMenuPreview />} />
          <Route path="/components/pagination" element={<PaginationPreview />} />
          <Route path="/components/popover" element={<PopoverPreview />} />
          <Route path="/components/progress" element={<ProgressPreview />} />
          <Route path="/components/radio-group" element={<RadioGroupPreview />} />
          <Route path="/components/resizable" element={<ResizablePreview />} />
          <Route path="/components/scroll-area" element={<ScrollAreaPreview />} />
          <Route path="/components/select" element={<SelectPreview />} />
          <Route path="/components/separator" element={<SeparatorPreview />} />
          <Route path="/components/sheet" element={<SheetPreview />} />
          <Route path="/components/skeleton" element={<SkeletonPreview />} />
          <Route path="/components/slider" element={<SliderPreview />} />
          <Route path="/components/sonner" element={<SonnerPreview />} />
          <Route path="/components/spinner" element={<SpinnerPreview />} />
          <Route path="/components/switch" element={<SwitchPreview />} />
          <Route path="/components/table" element={<TablePreview />} />
          <Route path="/components/tabs" element={<TabsPreview />} />
          <Route path="/components/textarea" element={<TextareaPreview />} />
          <Route path="/components/toggle" element={<TogglePreview />} />
          <Route path="/components/toggle-group" element={<ToggleGroupPreview />} />
          <Route path="/components/tooltip" element={<TooltipPreview />} />
          <Route path="*" element={<ErrrorPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
