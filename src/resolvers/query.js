module.exports = {
  events: async (parent, args, { models }) => {
    return await models.Event.find()
  },
  event: async (parent, args, { models }) => {
    return await models.Event.findById(args.id)
  }
}