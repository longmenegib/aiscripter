import mongoose, {models, model} from "mongoose";

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    require: true
  },
  subscription: {
    type: String,
    enum: ['basic', 'intermediate', 'ultimate'],
    default: 'basic'
  },
  requestsThisMonth: {
    type: Number,
    default: 0
  },
  subscriptionStartDate: {
    type: Date,
    default: Date.now
  },
  subscriptionEndDate: {
    type: Date,
    required: true
  }
});

export default models.User || model("User", UserSchema);