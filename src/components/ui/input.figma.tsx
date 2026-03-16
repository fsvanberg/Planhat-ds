import figma from "@figma/code-connect"
import { Input } from "@/components/ui/input"

figma.connect(
  Input,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=65-533",
  {
    props: {
      variant: figma.enum("Variant", {
        "Default": "default",
        "Password": "password",
        "File": "file",
      }),
    },
    example: ({ variant }) => (
      <Input variant={variant} />
    ),
  }
)
