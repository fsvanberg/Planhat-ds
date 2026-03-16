import figma from "@figma/code-connect"
import { Accordion } from "@/components/ui/accordion"

figma.connect(
  Accordion,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=21119-34264",
  {
    props: {
      variant: figma.enum("Variant", {
        "Basic": "basic",
        "Border": "border",
      }),
    },
    example: ({ variant }) => (
      <Accordion variant={variant} />
    ),
  }
)
