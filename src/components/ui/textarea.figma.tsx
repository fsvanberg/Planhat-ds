import figma from "@figma/code-connect"
import { Textarea } from "@/components/ui/textarea"

figma.connect(
  Textarea,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=183-74",
  {
    example: () => (
      <Textarea />
    ),
  }
)
