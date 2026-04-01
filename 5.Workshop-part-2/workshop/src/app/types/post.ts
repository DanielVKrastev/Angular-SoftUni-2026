import { Theme } from "./themes"
import { User } from "./user"

export interface Post {
    "likes": String[],
    "_id": String,
    "text": String,
    "userId": User,
    "themeId": Theme,
    "created_at": String,
    "updatedAt": String,
    "__v": Number
  }