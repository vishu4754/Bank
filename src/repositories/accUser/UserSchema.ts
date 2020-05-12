import * as mongoose from 'mongoose'
export default class UserSchema extends mongoose.Schema  {
    constructor(options){
   const userSchema = {
       id: String,
       name: String,
       accountNo : Number,
       email: String,
       password: String,
       balance: Number,
       }
       super(userSchema, options );
    }
}