const { default: mongoose } = require('mongoose');

module.exports = {
  createEvent: async (parent, args, { models }) => {
    return await models.Event.create({
      title: args.title,
      description: args.description,
      date: args.date,
      locationArea: args.locationArea,
      participant: 0,
      image: args.image,
      activities: mongoose.Types.ObjectId(args.activities),
    });
  },
  deleteEvent: async (parent, { id }, { models }) => {
    try {
      await models.Event.findOneAndRemove({ _id: id });
      return true;
    } catch (err) {
      return false;
    }
  },
  updateEvent: async (
    parent,
    {
      id,
      title,
      description,
      date,
      locationArea,
      participant,
      image,
      activities,
    },
    { models }
  ) => {
    return await models.Event.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $set: {
          title,
          description,
          date,
          locationArea,
          participant,
          image,
          activities,
        },
      },
      {
        new: true,
      }
    );
  },
  createActivity: async (parent, args, { models }) => {
    return await models.Activity.create({
      activityPhoto: args.activityPhoto,
      activityDescription: args.activityDescription,
    });
  },
  updateActivity: async (
    parent,
    { id, activityPhoto, activityDescription },
    { models }
  ) => {
    return await models.Activity.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $set: {
          activityPhoto,
          activityDescription,
        },
      },
      {
        new: true,
      }
    );
  },
  deleteActivity: async (parent, { id }, { models }) => {
    try {
      await models.Activity.findOneAndRemove({ _id: id });
      return true;
    } catch (err) {
      return false;
    }
  },
};
