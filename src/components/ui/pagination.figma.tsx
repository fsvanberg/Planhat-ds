import figma from "@figma/code-connect"
import { Pagination } from "@/components/ui/pagination"

figma.connect(
  Pagination,
  "https://www.figma.com/design/CWvjBASBvIEpTTBPkegrpR/?node-id=208-1651",
  {
    example: () => (
      <Pagination />
    ),
  }
)
