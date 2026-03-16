import figma from "@figma/code-connect"
import { ScrollArea } from "@/components/ui/scroll-area"

figma.connect(
  ScrollArea,
  "https://www.figma.com/design/CWvjBASBvIEpTTBPkegrpR/?node-id=296-207",
  {
    example: () => (
      <ScrollArea />
    ),
  }
)
