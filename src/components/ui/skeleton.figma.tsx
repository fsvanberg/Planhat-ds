import figma from "@figma/code-connect"
import { Skeleton } from "@/components/ui/skeleton"

figma.connect(
  Skeleton,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=295-462",
  {
    props: {
      variant: figma.enum("Variant", {
        "Default": "default",
        "Card": "card",
        "Text": "text",
        "Table": "table",
        "Form": "form",
      }),
    },
    example: ({ variant }) => (
      <Skeleton variant={variant} />
    ),
  }
)
