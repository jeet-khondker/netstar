import React from "react";

import { User } from "firebase/auth"

// タイプ : ユーザー認証取得プロパティタイプ
export interface AuthProviderPropertyType {
    children : React.ReactNode
}

// タイプ : ユーザー認証タイプ
export interface Auth {
    user : User | null
    signUp : (email : string, password : string) => Promise<void>
    signIn : (email : string, password : string) => Promise<void>
    logout : () => Promise<void>
    error : string | null
    loading : boolean
}