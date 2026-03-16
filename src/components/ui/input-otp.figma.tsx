import figma from "@figma/code-connect"
import { InputOtp } from "@/components/ui/input-otp"

figma.connect(
  InputOtp,
  "https://www.figma.com/design/RKLvXKJ8SjezSr3ZLKBjhw/?node-id=81-141",
  {
    props: {
      variant: figma.enum("Variant", {
        "Digits Only": "digits-only",
        "With Spacing": "with-spacing",
        "Simple": "simple",
        "With Separator": "with-separator",
      }),
    },
    example: ({ variant }) => (
      <InputOtp variant={variant} />
    ),
  }
)
