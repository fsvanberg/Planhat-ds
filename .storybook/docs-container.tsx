import { DocsContainer } from '@storybook/addon-docs/blocks'
import { create } from 'storybook/theming/create'
import { useState, useEffect } from 'react'
import type { ComponentProps } from 'react'

const font = '"Inter Variable", Inter, system-ui, sans-serif'

const docsLight = create({ base: 'light', fontBase: font })
const docsDark  = create({ base: 'dark',  fontBase: font })

type Props = ComponentProps<typeof DocsContainer>

export function ThemedDocsContainer(props: Props) {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains('dark')
  )

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
    return () => observer.disconnect()
  }, [])

  return <DocsContainer {...props} theme={isDark ? docsDark : docsLight} />
}
