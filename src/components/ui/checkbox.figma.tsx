import figma from "@figma/code-connect"
import { Checkbox } from "@/components/ui/checkbox"

figma.connect(
  Checkbox,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=46-112",
  {
    props: {
      checked: figma.enum("Checked", {
        "Yes": "yes",
        "No": "no",
      }),
      type: figma.enum("Type", {
        "Default": "default",
        "Box": "box",
      }),
      controlPlacement: figma.enum("Control Placement", {
        "Start": "start",
        "End": "end",
      }),
    },
    example: ({ checked, type, controlPlacement }) => (
      <Checkbox checked={checked} type={type} controlPlacement={controlPlacement} />
    ),
  }
)
