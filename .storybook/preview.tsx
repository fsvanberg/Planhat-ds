import type { Preview } from '@storybook/react-vite'
import { ThemedDocsContainer } from './docs-container'
import { DocsPage } from './docs-page'
import '../src/index.css'

const VIEWPORTS = {
  mobile: { name: 'Mobile', styles: { width: '375px', height: '812px' } },
  tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
  desktop: { name: 'Desktop', styles: { width: '1280px', height: '900px' } },
}

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Color theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = (context.globals['theme'] ?? 'light') as string
      document.documentElement.classList.toggle('dark', theme === 'dark')
      document.documentElement.style.colorScheme = theme
      // Force the canvas background using inline style so it wins over any
      // unlayered Storybook-injected CSS that would override our @layer base rules.
      document.body.style.backgroundColor = theme === 'dark' ? '#0a0a0a' : '#fafafa'
      return <Story />
    },
  ],
  parameters: {
    options: {
      storySort: {
        order: ['Foundations', 'Blocks', 'Components'],
      },
    },
    backgrounds: { disable: true },
    docs: {
      container: ThemedDocsContainer,
      page: DocsPage,
    },
    viewport: {
      options: VIEWPORTS,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
}

export default preview
