export interface User {
    "themes": String[],
    "posts": String[],
    "_id": String,
    "tel": String,
    "email": String,
    "username": String,
    "password": String,
    "created_at": String,
    "updatedAt": String,
    "__v": Number
}

export interface UserForAuth {
    username: string;
    email: string;
    tel?: string;
    password: string;
    id: string;
}

export interface ProfileDetails {
    username: string,
    email: string,
    tel: string,
}