import figma from "@figma/code-connect"
import { Badge } from "@/components/ui/badge"

figma.connect(
  Badge,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=26-169",
  {
    props: {
      variant: figma.enum("Variant", {
        "Default": "default",
        "Secondary": "secondary",
        "Outline": "outline",
        "Ghost": "ghost",
        "Destructive": "destructive",
        "Verified": "verified",
      }),
    },
    example: ({ variant }) => (
      <Badge variant={variant} />
    ),
  }
)
