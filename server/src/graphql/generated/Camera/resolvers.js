const Camera = {
  Query: {
    findUniqueCamera: (_parent, args, { prisma }) => {
      return prisma.camera.findUnique(args)
    },
    findFirstCamera: (_parent, args, { prisma }) => {
      return prisma.camera.findFirst(args)
    },
    findManyCamera: (_parent, args, { prisma }) => {
      return prisma.camera.findMany(args)
    },
    findManyCameraCount: (_parent, args, { prisma }) => {
      return prisma.camera.count(args)
    },
    aggregateCamera: (_parent, args, { prisma }) => {
      return prisma.camera.aggregate(args)
    },
  },
  Mutation: {
    createOneCamera: (_parent, args, { prisma }) => {
      return prisma.camera.create(args)
    },
    updateOneCamera: (_parent, args, { prisma }) => {
      return prisma.camera.update(args)
    },
    deleteOneCamera: async (_parent, args, { prisma }) => {
      return prisma.camera.delete(args)
    },
    upsertOneCamera: async (_parent, args, { prisma }) => {
      return prisma.camera.upsert(args)
    },
    deleteManyCamera: async (_parent, args, { prisma }) => {
      return prisma.camera.deleteMany(args)
    },
    updateManyCamera: (_parent, args, { prisma }) => {
      return prisma.camera.updateMany(args)
    },
  },
}

module.exports = {
  Camera,
}
