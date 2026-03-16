import figma from "@figma/code-connect"
import { Collapsible } from "@/components/ui/collapsible"

figma.connect(
  Collapsible,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=18597-96515",
  {
    example: () => (
      <Collapsible />
    ),
  }
)
