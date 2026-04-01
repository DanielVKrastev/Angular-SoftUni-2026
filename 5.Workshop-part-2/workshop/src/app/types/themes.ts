import { User } from "./user"

export interface Theme {
    "subscribers": String[],
    "posts": String[],
    "_id": String,
    "themeName": String,
    "userId": User,
    "created_at": String,
    "updatedAt": String,
    "__v": Number
}