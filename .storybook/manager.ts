import { addons } from 'storybook/manager-api'
import { GLOBALS_UPDATED } from 'storybook/internal/core-events'
import { create } from 'storybook/theming/create'

// Colour values derived from the design system tokens in src/index.css
// (oklch neutrals converted to approximate hex equivalents)

const font = '"Inter Variable", Inter, system-ui, sans-serif'
const mono = 'ui-monospace, SFMono-Regular, Menlo, monospace'

const light = create({
  base: 'light',
  fontBase: font,
  fontCode: mono,

  colorPrimary:   '#1a1a1a', // --primary light
  colorSecondary: '#1a1a1a',

  // Chrome
  appBg:           '#f5f5f5', // --sidebar
  appContentBg:    '#fafafa', // --background
  appHoverBg:      '#ebebeb',
  appPreviewBg:    '#fafafa',
  appBorderColor:  '#e8e8e8', // --border
  appBorderRadius: 4,

  // Text
  textColor:        '#1a1a1a', // --foreground
  textMutedColor:   '#757575', // --muted-foreground
  textInverseColor: '#fafafa',

  // Toolbar / navbar
  barBg:            '#fafafa',
  barTextColor:     '#757575',
  barHoverColor:    '#1a1a1a',
  barSelectedColor: '#1a1a1a',

  // Inputs / controls
  inputBg:           '#ffffff',
  inputBorder:       '#e8e8e8',
  inputTextColor:    '#1a1a1a',
  inputBorderRadius: 4,

  buttonBg:     '#ffffff',
  buttonBorder: '#e8e8e8',

  booleanBg:         '#e8e8e8',
  booleanSelectedBg: '#1a1a1a',
})

const dark = create({
  base: 'dark',
  fontBase: font,
  fontCode: mono,

  colorPrimary:   '#ebebeb', // --primary dark
  colorSecondary: '#ebebeb',

  // Chrome
  appBg:           '#252525',              // --sidebar dark
  appContentBg:    '#1a1a1a',              // --background dark
  appHoverBg:      '#343434',
  appPreviewBg:    '#1a1a1a',
  appBorderColor:  'rgba(255,255,255,0.1)', // --border dark
  appBorderRadius: 4,

  // Text
  textColor:        '#fafafa', // --foreground dark
  textMutedColor:   '#9a9a9a', // --muted-foreground dark
  textInverseColor: '#1a1a1a',

  // Toolbar / navbar
  barBg:            '#1a1a1a',
  barTextColor:     '#9a9a9a',
  barHoverColor:    '#fafafa',
  barSelectedColor: '#fafafa',

  // Inputs / controls
  inputBg:           '#252525',
  inputBorder:       'rgba(255,255,255,0.1)',
  inputTextColor:    '#fafafa',
  inputBorderRadius: 4,

  buttonBg:     '#343434',
  buttonBorder: 'rgba(255,255,255,0.1)',

  booleanBg:         '#343434',
  booleanSelectedBg: '#ebebeb',
})

// Apply light theme on initial load
addons.setConfig({ theme: light, panelPosition: 'right' })

// Switch the manager theme whenever the toolbar Light / Dark global changes
addons.register('planhat-theme', (api) => {
  api.on(GLOBALS_UPDATED, ({ globals }: { globals: Record<string, string> }) => {
    addons.setConfig({ theme: globals.theme === 'dark' ? dark : light })
  })
})
