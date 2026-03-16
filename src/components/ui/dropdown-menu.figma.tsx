import figma from "@figma/code-connect"
import { DropdownMenu } from "@/components/ui/dropdown-menu"

figma.connect(
  DropdownMenu,
  "https://www.figma.com/design/CWvjBASBvIEpTTBPkegrpR/?node-id=330-8549",
  {
    example: () => (
      <DropdownMenu />
    ),
  }
)
