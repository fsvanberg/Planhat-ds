import figma from "@figma/code-connect"
import { Drawer } from "@/components/ui/drawer"

figma.connect(
  Drawer,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=244-2831",
  {
    props: {
      direction: figma.enum("Direction", {
        "bottom": "bottom",
        "top": "top",
        "right": "right",
        "left": "left",
      }),
    },
    example: ({ direction }) => (
      <Drawer direction={direction} />
    ),
  }
)
