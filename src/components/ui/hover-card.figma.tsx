import figma from "@figma/code-connect"
import { HoverCard } from "@/components/ui/hover-card"

figma.connect(
  HoverCard,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=216-3141",
  {
    props: {
      active: figma.enum("Active", {
        "No": "no",
        "Yes": "yes",
      }),
    },
    example: ({ active }) => (
      <HoverCard active={active} />
    ),
  }
)
