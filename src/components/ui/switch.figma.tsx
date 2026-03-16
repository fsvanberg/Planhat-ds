import figma from "@figma/code-connect"
import { Switch } from "@/components/ui/switch"

figma.connect(
  Switch,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=60-450",
  {
    props: {
      size: figma.enum("Size", {
        "default": "default",
        "sm": "sm",
      }),
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
    example: ({ size, active, type, controlPlacement }) => (
      <Switch size={size} active={active} type={type} controlPlacement={controlPlacement} />
    ),
  }
)
