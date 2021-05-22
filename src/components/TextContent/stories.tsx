import { Story, Meta } from '@storybook/react/types-6-0'
import TextContent, { TextContextProps } from '.'
import textMock from './mock'

export default {
  title: 'TextContent',
  component: TextContent,
  args: textMock,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<TextContextProps> = (args) => (
  <TextContent {...args} />
)
