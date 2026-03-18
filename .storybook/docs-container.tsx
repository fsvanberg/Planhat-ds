import { DocsContainer } from '@storybook/addon-docs/blocks'
import { create } from 'storybook/theming/create'
import { useEffect } from 'react'
import type { ComponentProps } from 'react'

const font = '"Inter Variable", Inter, system-ui, sans-serif'

const docsLight = create({ base: 'light', fontBase: font })
const docsDark  = create({ base: 'dark',  fontBase: font })

type Props = ComponentProps<typeof DocsContainer>

export function ThemedDocsContainer(props: Props) {
  const isDark = (props.context?.globals?.['theme'] ?? 'light') === 'dark'

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light'
    document.body.style.backgroundColor = isDark ? '#0a0a0a' : '#fafafa'
  }, [isDark])

  return <DocsContainer {...props} theme={isDark ? docsDark : docsLight} />
}
