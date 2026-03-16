import figma from "@figma/code-connect"
import { Toggle } from "@/components/ui/toggle"

figma.connect(
  Toggle,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=124-27",
  {
    props: {
      variant: figma.enum("Variant", {
        "Default": "default",
        "Outline": "outline",
      }),
      size: figma.enum("Size", {
        "Default": "default",
        "sm": "sm",
        "lg": "lg",
      }),
    },
    example: ({ variant, size }) => (
      <Toggle variant={variant} size={size} />
    ),
  }
)
