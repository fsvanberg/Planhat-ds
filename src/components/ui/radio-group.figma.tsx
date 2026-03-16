import figma from "@figma/code-connect"
import { RadioGroup } from "@/components/ui/radio-group"

figma.connect(
  RadioGroup,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=65-326",
  {
    props: {
      active: figma.enum("Active", {
        "Off": "off",
        "On": "on",
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
    example: ({ active, type, controlPlacement }) => (
      <RadioGroup active={active} type={type} controlPlacement={controlPlacement} />
    ),
  }
)
