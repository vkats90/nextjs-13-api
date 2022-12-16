import mongoose from "mongoose";

    const UserSchema = new mongoose.Schema({
        username:{
          type:String,
          required:true
        },
        exercise:[{
          description: {
            type:String,
            required: false
          },
          duration: {
            type:Number,
            required: false
          },
          date: {
            type:String,
            required: false
          },
        }]
      })


export default mongoose.models.User || mongoose.model('User', UserSchema)