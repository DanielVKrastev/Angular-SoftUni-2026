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
    firstName: string;
    email: string;
    phoneNumber: string;
    password: string;
    id: string;
}

export interface ProfileDetails {
    username: string,
    email: string,
    tel: string,
}