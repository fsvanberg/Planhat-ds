import figma from "@figma/code-connect"
import { Popover } from "@/components/ui/popover"

figma.connect(
  Popover,
  "https://www.figma.com/design/CWvjBASBvIEpTTBPkegrpR/?node-id=193-1388",
  {
    example: () => (
      <Popover />
    ),
  }
)
