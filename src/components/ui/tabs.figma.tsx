import figma from "@figma/code-connect"
import { Tabs } from "@/components/ui/tabs"

figma.connect(
  Tabs,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=21133-27311",
  {
    props: {
      variant: figma.enum("Variant", {
        "Default": "default",
        "Line": "line",
      }),
      orientation: figma.enum("Orientation", {
        "Default": "default",
        "Vertical": "vertical",
      }),
    },
    example: ({ variant, orientation }) => (
      <Tabs variant={variant} orientation={orientation} />
    ),
  }
)
