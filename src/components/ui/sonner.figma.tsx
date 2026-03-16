import figma from "@figma/code-connect"
import { Sonner } from "@/components/ui/sonner"

figma.connect(
  Sonner,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=18482-48401",
  {
    example: () => (
      <Sonner />
    ),
  }
)
