import { gql } from '@apollo/client'

export const FIND_MANY_CAMERA = gql`
{
  findManyCamera{
    id
    title
    cameraNumber
    url
    sizeFire
    dataFire
    area
    latlng
    damage
    selfExtinguishing
    distribution
    squares
  }
}
`