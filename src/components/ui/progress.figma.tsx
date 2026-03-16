import figma from "@figma/code-connect"
import { Progress } from "@/components/ui/progress"

figma.connect(
  Progress,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=296-4740",
  {
    props: {
      percent: figma.enum("Percent", {
        "100%": "100%",
        "75%": "75%",
        "50%": "50%",
        "25%": "25%",
        "0%": "0%",
      }),
    },
    example: ({ percent }) => (
      <Progress percent={percent} />
    ),
  }
)
