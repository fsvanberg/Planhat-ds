import figma from "@figma/code-connect"
import { InputGroup } from "@/components/ui/input-group"

figma.connect(
  InputGroup,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=18672-226415",
  {
    props: {
      type: figma.enum("Type", {
        "Input": "input",
        "Textarea": "textarea",
      }),
    },
    example: ({ type }) => (
      <InputGroup type={type} />
    ),
  }
)
