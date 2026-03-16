import figma from "@figma/code-connect"
import { Label } from "@/components/ui/label"

figma.connect(
  Label,
  "https://www.figma.com/design/CWvjBASBvIEpTTBPkegrpR/?node-id=65-517",
  {
    example: () => (
      <Label />
    ),
  }
)
