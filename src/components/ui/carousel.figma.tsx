import figma from "@figma/code-connect"
import { Carousel } from "@/components/ui/carousel"

figma.connect(
  Carousel,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=241-1368",
  {
    props: {
      orientation: figma.enum("Orientation", {
        "Horizontal": "horizontal",
        "Vertical": "vertical",
      }),
      breakpoint: figma.enum("Breakpoint", {
        "sm": "sm",
        "md": "md",
        "lg": "lg",
      }),
    },
    example: ({ orientation, breakpoint }) => (
      <Carousel orientation={orientation} breakpoint={breakpoint} />
    ),
  }
)
