import figma from "@figma/code-connect"
import { Table } from "@/components/ui/table"

figma.connect(
  Table,
  "https://www.figma.com/design/CWvjBASBvIEpTTBPkegrpR/?node-id=190-898",
  {
    example: () => (
      <Table />
    ),
  }
)
