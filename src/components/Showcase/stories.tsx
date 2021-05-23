import { Story, Meta } from '@storybook/react/types-6-0'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Showcase, { ShowcaseProps } from '.'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<ShowcaseProps> = (args) => <Showcase {...args} />

Default.args = {
  title: 'Most populars',
  highlight: highlightMock,
  games: gamesMock
}

export const WithoutHighlight: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutHighlight.args = {
  title: 'Most populars',
  games: gamesMock
}

export const WithoutGames: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutGames.args = {
  title: 'Most populars',
  highlight: highlightMock
}
