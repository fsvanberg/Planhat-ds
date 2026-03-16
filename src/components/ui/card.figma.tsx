import figma from "@figma/code-connect"
import { Card } from "@/components/ui/card"

figma.connect(
  Card,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=21123-292666",
  {
    props: {
      size: figma.enum("Size", {
        "default": "default",
        "sm": "sm",
      }),
    },
    example: ({ size }) => (
      <Card size={size} />
    ),
  }
)
