import figma from "@figma/code-connect"
import { Avatar } from "@/components/ui/avatar"

figma.connect(
  Avatar,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=17100-29935",
  {
    props: {
      type: figma.enum("Type", {
        "Image": "image",
        "Fallback": "fallback",
        "Icon": "icon",
      }),
      size: figma.enum("Size", {
        "xl": "xl",
        "lg": "lg",
        "default": "default",
        "sm": "sm",
        "xs": "xs",
      }),
    },
    example: ({ type, size }) => (
      <Avatar type={type} size={size} />
    ),
  }
)
