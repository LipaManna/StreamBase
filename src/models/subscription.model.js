import mongoose, {
    
    
    Schema} from "mongoose";

const subscriptionSchema = new schema({
    subscriber:{
        type: Schema.Types.ObjectId, //One who is subscribing
        ref: "User"
    },
    channel:{
        type: Schema.Types.ObjectId, //One to which 'subscriber' is subscribing
        ref: "User"
    }
});



export const Subscription = mongoose.model("Subscription", subscriptionSchema)