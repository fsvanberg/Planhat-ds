import figma from "@figma/code-connect"
import { Combobox } from "@/components/ui/combobox"

figma.connect(
  Combobox,
  "https://www.figma.com/design/CWvjBASBvIEpTTBPkegrpR/?node-id=21180-30054",
  {
    example: () => (
      <Combobox />
    ),
  }
)
