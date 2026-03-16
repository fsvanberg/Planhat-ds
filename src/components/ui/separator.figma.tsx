import figma from "@figma/code-connect"
import { Separator } from "@/components/ui/separator"

figma.connect(
  Separator,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=118-2690",
  {
    props: {
      orientation: figma.enum("Orientation", {
        "Horizontal": "horizontal",
        "Vertical": "vertical",
      }),
    },
    example: ({ orientation }) => (
      <Separator orientation={orientation} />
    ),
  }
)
