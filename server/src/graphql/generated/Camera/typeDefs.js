const { default: gql } = require('graphql-tag')

const Camera = gql`
  type Camera {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String
    cameraNumber: Int!
    url: String
    sizeFire: Int!
    dataFire: String
    area: String
    latlng: String
    damage: String
    selfExtinguishing: String
    distribution: String
    squares: [Json!]!
  }

  type Query {
    findUniqueCamera(where: CameraWhereUniqueInput!): Camera
    findFirstCamera(
      where: CameraWhereInput
      orderBy: [CameraOrderByInput!]
      cursor: CameraWhereUniqueInput
      distinct: CameraScalarFieldEnum
      skip: Int
      take: Int
    ): Camera
    findManyCamera(
      where: CameraWhereInput
      orderBy: [CameraOrderByInput!]
      cursor: CameraWhereUniqueInput
      distinct: CameraScalarFieldEnum
      skip: Int
      take: Int
    ): [Camera!]
    findManyCameraCount(
      where: CameraWhereInput
      orderBy: [CameraOrderByInput!]
      cursor: CameraWhereUniqueInput
      distinct: CameraScalarFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateCamera(
      where: CameraWhereInput
      orderBy: [CameraOrderByInput!]
      cursor: CameraWhereUniqueInput
      distinct: CameraScalarFieldEnum
      skip: Int
      take: Int
    ): AggregateCamera
  }
  type Mutation {
    createOneCamera(data: CameraCreateInput!): Camera!
    updateOneCamera(
      where: CameraWhereUniqueInput!
      data: CameraUpdateInput!
    ): Camera!
    deleteOneCamera(where: CameraWhereUniqueInput!): Camera
    upsertOneCamera(
      where: CameraWhereUniqueInput!
      create: CameraCreateInput!
      update: CameraUpdateInput!
    ): Camera
    deleteManyCamera(where: CameraWhereInput): BatchPayload
    updateManyCamera(
      where: CameraWhereInput
      data: CameraUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  Camera,
}
