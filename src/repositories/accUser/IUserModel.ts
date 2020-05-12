import IVersionSchema from '../versionRepositories/IVersionSchema';

export default interface IUserModel extends IVersionSchema{
    id: string;
    name: string;
    accountNo: number;
    email: string;
    password: string;
    balance: number ;
}