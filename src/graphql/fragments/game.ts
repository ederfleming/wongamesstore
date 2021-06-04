import { gql } from '@apollo/client'

export const BannerFragment = gql`
  fragment GameFragment on Game {
    name
    slug
    cover {
      url
    }
    developers {
      name
    }
    price
  }
`
