import figma from "@figma/code-connect"
import { Menubar } from "@/components/ui/menubar"

figma.connect(
  Menubar,
  "https://www.figma.com/design/CWvjBASBvIEpTTBPkegrpR/?node-id=210-3528",
  {
    example: () => (
      <Menubar />
    ),
  }
)
