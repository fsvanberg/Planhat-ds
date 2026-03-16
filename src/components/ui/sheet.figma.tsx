import figma from "@figma/code-connect"
import { Sheet } from "@/components/ui/sheet"

figma.connect(
  Sheet,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=220-4633",
  {
    props: {
      position: figma.enum("Position", {
        "right": "right",
        "top": "top",
        "bottom": "bottom",
        "left": "left",
      }),
    },
    example: ({ position }) => (
      <Sheet position={position} />
    ),
  }
)
