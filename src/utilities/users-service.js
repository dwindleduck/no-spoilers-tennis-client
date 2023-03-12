import * as usersAPI from "./users-api"

export async function signUp(userData) {
    const token = await usersAPI.signUp(userData)
    return login(userData)
}

export function getToken() {
    
    //get token from localStorage
    const token = localStorage.getItem("token")
    if(!token) return null
    return token
}

export function getUser() {
    const token = getToken()
    if(token){
        return token
    } else {
        return null
    }
}

export function logOut() {
    localStorage.removeItem("token")
    // localStorage.removeItem("userName")
    // localStorage.removeItem("userId")
}

export async function login(credentials) {
    //should be creating a token by loggin in 
    const token = await usersAPI.login(credentials)
    //save the token, return the user
    localStorage.setItem("token", token.user.token)
    // localStorage.setItem("userName", token.user.email)
    // localStorage.setItem("userId", token.user.id)
    return getUser()
}