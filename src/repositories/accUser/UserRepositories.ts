import { userModel } from './UserModel';
import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import VersionRepository from '../versionRepositories/VersionRepository';

export default class UserRepository extends VersionRepository<IUserModel, mongoose.Model<IUserModel>> {

  private userModel: mongoose.Model<IUserModel>;

  constructor() {
    super(userModel);
  }

  static generateObjectId() {

    return String(mongoose.Types.ObjectId());
  }

  async create(options: object) {
     
    return super.create(options);
  
  }

  async list(query: any = {}, options: any = {}) {
    console.log('----------query-------', options)
    options.skip = Number(options.skip);
    options.limit = Number(options.limit);
    console.log(options)
    return super.list(query, options);
  }

  async update(id: string, dataToUpdate: any = {}) {

    return super.update(id, dataToUpdate);
  }

  async delete(id: string) {

    return super.delete(id);
  }

  async get(data: object) {

    return this.userModel.findOne({ ...data }).lean();
  }
}