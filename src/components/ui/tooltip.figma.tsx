import figma from "@figma/code-connect"
import { Tooltip } from "@/components/ui/tooltip"

figma.connect(
  Tooltip,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=17103-809",
  {
    props: {
      side: figma.enum("Side", {
        "Top": "top",
        "Bottom": "bottom",
        "Left": "left",
        "Right": "right",
      }),
    },
    example: ({ side }) => (
      <Tooltip side={side} />
    ),
  }
)
