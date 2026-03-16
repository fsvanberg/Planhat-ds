import figma from "@figma/code-connect"
import { Button } from "@/components/ui/button"

figma.connect(
  Button,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=37-931",
  {
    props: {
      variant: figma.enum("Variant", {
        "Default": "default",
        "Secondary": "secondary",
        "Destructive": "destructive",
        "Outline": "outline",
        "Ghost": "ghost",
        "Link": "link",
      }),
      size: figma.enum("Size", {
        "default": "default",
        "sm": "sm",
        "lg": "lg",
        "icon": "icon",
        "icon-sm": "icon-sm",
        "icon-xs": "icon-xs",
        "icon-lg": "icon-lg",
        "xs": "xs",
      }),
    },
    example: ({ variant, size }) => (
      <Button variant={variant} size={size} />
    ),
  }
)
