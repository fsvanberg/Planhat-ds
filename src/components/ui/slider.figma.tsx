import figma from "@figma/code-connect"
import { Slider } from "@/components/ui/slider"

figma.connect(
  Slider,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=17382-13106",
  {
    props: {
      range: figma.enum("Range", {
        "No": "no",
        "Yes": "yes",
      }),
    },
    example: ({ range }) => (
      <Slider range={range} />
    ),
  }
)
