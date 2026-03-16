import figma from "@figma/code-connect"
import { Breadcrumb } from "@/components/ui/breadcrumb"

figma.connect(
  Breadcrumb,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=109-947",
  {
    props: {
      size: figma.enum("Size", {
        "md": "md",
        "sm": "sm",
      }),
    },
    example: ({ size }) => (
      <Breadcrumb size={size} />
    ),
  }
)
