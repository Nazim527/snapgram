import { INewUser } from "@/types";
import { account } from "./config";
import { ID } from "appwrite";

export async function CreateUserAccount(user: INewUser) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.name,
            user.email,
            user.password,
        )

        return newAccount
    } catch (error) {
        console.log(error);
        return error
    }
}