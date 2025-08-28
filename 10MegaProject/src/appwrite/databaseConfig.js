import config from "../config";
import { Client, Databases, Storage, ID, Query } from "appwrite";

export class DataService {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client.setEndpoint(config.appWriteUrl).setProject(config.projectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.databaseId,
        config.collectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("error from create post", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.databaseId,
        config.collectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("error from updatepost", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.databaseId,
        config.collectionId,
        slug
      );
    } catch (error) {
      console.log("error from deletepost", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.databaseId,
        config.collectionId,
        slug
      );
    } catch (error) {
      console.log("error from get post", error);
      return false;
    }
  }

  async allPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.databaseId,
        config.collectionId,
        queries
      );
    } catch (error) {
      console.log("error from get posts", error);
      return false;
    }
  }

  async uploadFile(file) {
    try {
      return await this.storage.createFile(config.bucketId, ID.unique(), file);
    } catch (error) {
      console.log("error from uploadfile", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      return await this.storage.deleteFile(config.bucketId, fileId);
    } catch (error) {
      console.log("error from delefile", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.storage.getFilePreview(config.bucketId, fileId);
  }
}

const databaseservice = new DataService();

export default databaseservice;
