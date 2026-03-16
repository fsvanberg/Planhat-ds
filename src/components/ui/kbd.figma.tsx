import figma from "@figma/code-connect"
import { Kbd } from "@/components/ui/kbd"

figma.connect(
  Kbd,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=18665-781",
  {
    props: {
      background: figma.enum("Background", {
        "Default": "default",
        "Primary": "primary",
      }),
    },
    example: ({ background }) => (
      <Kbd background={background} />
    ),
  }
)
