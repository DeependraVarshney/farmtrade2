import conf from "../conf/conf";

import { Client, Account,ID} from 'appwrite';

export class AuthService{
    client =new Client();
    account;

    constructor(){
        this.client
           .setEndpoint(conf.appWriteUrl)
           .setProject(conf.appWriteProjectId)
        this.account=new Account(this.client)
    }
    async createAccount({email,password}){
        try {
            const userAcount=await this.account.create(ID.unique(),email,password);
            if (userAcount) {
                return this.login({email,password});
                //call another method
            } else {
                return userAcount;
            }
        } catch (error) {
            throw error;
        }

    }
    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password);
        } catch (error) {
            throw error;
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: geCurrentUser :: error",error);
        }
        return null;
    }
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error",error);

        }
    }
}

const authService =new AuthService(); 

export default authService