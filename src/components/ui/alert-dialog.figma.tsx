import figma from "@figma/code-connect"
import { AlertDialog } from "@/components/ui/alert-dialog"

figma.connect(
  AlertDialog,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=83-122",
  {
    props: {
      size: figma.enum("Size", {
        "default": "default",
        "sm": "sm",
      }),
      destructive: figma.enum("Destructive", {
        "No": "no",
        "Yes": "yes",
      }),
    },
    example: ({ size, destructive }) => (
      <AlertDialog size={size} destructive={destructive} />
    ),
  }
)
