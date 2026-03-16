import figma from "@figma/code-connect"
import { Dialog } from "@/components/ui/dialog"

figma.connect(
  Dialog,
  "https://www.figma.com/design/CWvjBASBvIEpTTBPkegrpR/?node-id=5056-13504",
  {
    example: () => (
      <Dialog />
    ),
  }
)
