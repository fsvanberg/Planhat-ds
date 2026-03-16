import figma from "@figma/code-connect"
import { Calendar } from "@/components/ui/calendar"

figma.connect(
  Calendar,
  "https://www.figma.com/design/CWvjBASBvIEpTTBPkegrpR/?node-id=17179-197284",
  {
    example: () => (
      <Calendar />
    ),
  }
)
