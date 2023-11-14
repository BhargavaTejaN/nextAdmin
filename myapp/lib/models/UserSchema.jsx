import mongoose, {Schema,model,models} from "mongoose";

const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      img: {
        type: String,
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
      isActive: {
        type: Boolean,
        default: true,
      },
      phone: {
        type: String,
      },
      address: {
        type: String,
      },
    },
    { timestamps: true }
);

const User = models.User || model('User',userSchema);
export default User;