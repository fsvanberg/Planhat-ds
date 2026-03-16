import figma from "@figma/code-connect"
import { ContextMenu } from "@/components/ui/context-menu"

figma.connect(
  ContextMenu,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=21473-105823",
  {
    example: () => (
      <ContextMenu />
    ),
  }
)
