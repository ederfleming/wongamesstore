import { gql } from '@apollo/client'

export const BannerFragment = gql`
  fragment BannerFragment on Banner {
    image {
      url
    }
    title
    subtitle
    button {
      label
      link
    }
    ribbon {
      text
      color
      size
    }
  }
`

// fragment BannerFragment on Banner {
//   image {
//       url
//     }
//     title
//     subtitle
//     button {
//       label
//       link
//     }
//     ribbon {
//       text
//       color
//       size
//     }
// }

// fragment GameFragment on Game {
//     name
//     slug
//     cover{
//       url
//     }
//     developers{
//       name
//     }
//     price

// }

// query QueryHome{
//   banners{
//     ...BannerFragment
//   }

//   newGames:   games(where: {release_date_lte: "2021-05-25"}, sort: "release_date:desc", limit: 8){
//     ...GameFragment
//   }

//   upcomingGames:   games(where: {release_date_gt: "2021-05-25"}, sort: "release_date:asc", limit: 8){
//   ...GameFragment
//   }

//     freeGames:   games(where: {price: 0}, sort: "release_date:desc", limit: 8){
//  ...GameFragment
//   }

// }
