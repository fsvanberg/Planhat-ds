import figma from "@figma/code-connect"
import { NavigationMenu } from "@/components/ui/navigation-menu"

figma.connect(
  NavigationMenu,
  "https://www.figma.com/design/CWvjBASBvIEpTTBPkegrpR/?node-id=210-2018",
  {
    example: () => (
      <NavigationMenu />
    ),
  }
)
