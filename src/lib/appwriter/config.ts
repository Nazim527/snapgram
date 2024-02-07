import {Client, Account, Databases, Storage, Avatars} from "appwrite"

// export const appwriteConfig = {
//     projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
//     url: import.meta.env.VITE_APPWRITE_PROJECT_URL
// } 

export const client = new Client();

client.setProject("65c11ad15a85feb34a2e")
client.setEndpoint("https://cloud.appwrite.io/v1")

export const account = new Account(client)
export const database = new Databases(client)
export const storage = new Storage(client)
export const avatars = new Avatars(client) 