import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { Layout } from "@/routes/+layout"
import { componentItems } from "@/lib/registry"
import {
  AlertDialogPreview,
  BadgePreview,
  ButtonPreview,
  CardPreview,
  ComboboxPreview,
  FieldPreview,
  InputGroupPreview,
  InputPreview,
  SelectPreview,
  SeparatorPreview,
  TextareaPreview,
} from "@/routes/previews"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<Navigate to={componentItems[0].path} replace />}
          />
          <Route path="/components/alert-dialog" element={<AlertDialogPreview />} />
          <Route path="/components/badge" element={<BadgePreview />} />
          <Route path="/components/button" element={<ButtonPreview />} />
          <Route path="/components/card" element={<CardPreview />} />
          <Route path="/components/combobox" element={<ComboboxPreview />} />
          <Route path="/components/field" element={<FieldPreview />} />
          <Route path="/components/input" element={<InputPreview />} />
          <Route path="/components/input-group" element={<InputGroupPreview />} />
          <Route path="/components/select" element={<SelectPreview />} />
          <Route path="/components/separator" element={<SeparatorPreview />} />
          <Route path="/components/textarea" element={<TextareaPreview />} />
          <Route
            path="*"
            element={<Navigate to={componentItems[0].path} replace />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
