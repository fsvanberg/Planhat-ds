import figma from "@figma/code-connect"
import { Select } from "@/components/ui/select"

figma.connect(
  Select,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=345-11530",
  {
    props: {
      size: figma.enum("Size", {
        "default": "default",
        "sm": "sm",
      }),
    },
    example: ({ size }) => (
      <Select size={size} />
    ),
  }
)
