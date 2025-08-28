import config from "../config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(config.appWriteUrl).setProject(config.projectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // if user createaccount successfully direct login account
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("error from create account", error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log("error from login", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("error : service error from appwrite ::", error);
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("error : service error from appwrite ::", error);
    }
  }
}

const authService = new AuthService();

export default authService;
