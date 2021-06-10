import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES } from 'graphql/queries/games'

import GamesTemplate, { GamesTemplateProps } from 'templates/Games'

import { initializeApollo } from 'utils/apollo'

import filterItemsMock from 'components/ExploreSidebar/mock'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })
  return {
    props: {
      revalidate: 60,
      games: data.games.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover!.url}`,
        price: game.price
      })),
      filterItems: filterItemsMock
    }
  }
}

// import { screen } from '@testing-library/react'

// import { renderWithTheme } from 'utils/tests/helpers'

// import filterItemsMock from 'components/ExploreSidebar/mock'
// import gamesMock from 'components/GameCardSlider/mock'

// import Games from '.'

// jest.mock('templates/Base', () => ({
//   __esModule: true,
//   default: function Mock({ children }: { children: React.ReactNode }) {
//     return <div data-testid="Mock Base">{children}</div>
//   }
// }))

// jest.mock('components/ExploreSidebar', () => ({
//   __esModule: true,
//   default: function Mock({ children }: { children: React.ReactNode }) {
//     return <div data-testid="Mock ExploreSidebar">{children}</div>
//   }
// }))

// jest.mock('components/GameCard', () => ({
//   __esModule: true,
//   default: function Mock() {
//     return <div data-testid="Mock GameCard" />
//   }
// }))

// describe('<Games />', () => {
//   it('should render sections', () => {
//     renderWithTheme(
//       <Games filterItems={filterItemsMock} games={[gamesMock[0]]} />
//     )

//     expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument()
//     expect(screen.getByTestId('Mock GameCard')).toBeInTheDocument()

//     expect(
//       screen.getByRole('button', { name: /show more/i })
//     ).toBeInTheDocument()
//   })
// })
