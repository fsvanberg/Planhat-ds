import figma from "@figma/code-connect"
import { ToggleGroup } from "@/components/ui/toggle-group"

figma.connect(
  ToggleGroup,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=18707-214048",
  {
    props: {
      type: figma.enum("Type", {
        "Default": "default",
        "With Spacing": "with-spacing",
        "Fill": "fill",
      }),
      orientation: figma.enum("Orientation", {
        "Horizontal": "horizontal",
        "Vertical": "vertical",
      }),
    },
    example: ({ type, orientation }) => (
      <ToggleGroup type={type} orientation={orientation} />
    ),
  }
)
