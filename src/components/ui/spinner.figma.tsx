import figma from "@figma/code-connect"
import { Spinner } from "@/components/ui/spinner"

figma.connect(
  Spinner,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=18665-25956",
  {
    props: {
      size: figma.enum("Size", {
        "6": "6",
        "8": "8",
        "5": "5",
        "4": "4",
        "3": "3",
      }),
      spinDegreeForAnimation: figma.enum("Spin Degree (for animation)", {
        "0": "0",
        "90": "90",
        "180": "180",
        "270": "270",
      }),
    },
    example: ({ size, spinDegreeForAnimation }) => (
      <Spinner size={size} spinDegreeForAnimation={spinDegreeForAnimation} />
    ),
  }
)
