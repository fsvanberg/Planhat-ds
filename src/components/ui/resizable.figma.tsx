import figma from "@figma/code-connect"
import { ResizablePanelGroup as Resizable } from "@/components/ui/resizable"

figma.connect(
  Resizable,
  "https://www.figma.com/design/CWvjBASBvIEpTTBPkegrpR/?node-id=18449-210",
  {
    example: () => (
      <Resizable />
    ),
  }
)
