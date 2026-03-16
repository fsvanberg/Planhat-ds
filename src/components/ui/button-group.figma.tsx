import figma from "@figma/code-connect"
import { ButtonGroup } from "@/components/ui/button-group"

figma.connect(
  ButtonGroup,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=18672-224279",
  {
    props: {
      orientation: figma.enum("Orientation", {
        "Horizontal": "horizontal",
        "Vertical": "vertical",
      }),
      variant: figma.enum("Variant", {
        "Outline": "outline",
        "Default": "default",
        "Secondary": "secondary",
      }),
    },
    example: ({ orientation, variant }) => (
      <ButtonGroup orientation={orientation} variant={variant} />
    ),
  }
)
