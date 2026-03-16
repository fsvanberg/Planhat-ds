import figma from "@figma/code-connect"
import { Command } from "@/components/ui/command"

figma.connect(
  Command,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=204-1144",
  {
    props: {
      variant: figma.enum("Variant", {
        "Suggestions": "suggestions",
        "Empty": "empty",
      }),
    },
    example: ({ variant }) => (
      <Command variant={variant} />
    ),
  }
)
