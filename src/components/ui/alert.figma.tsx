import figma from "@figma/code-connect"
import { Alert } from "@/components/ui/alert"

figma.connect(
  Alert,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=26-160",
  {
    props: {
      variant: figma.enum("Variant", {
        "Default": "default",
        "Destructive": "destructive",
      }),
    },
    example: ({ variant }) => (
      <Alert variant={variant} />
    ),
  }
)
