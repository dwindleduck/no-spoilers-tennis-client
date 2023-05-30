import * as usersAPI from "./users-api"

export async function signUp(userData) {
    await usersAPI.signUp(userData)
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

export async function logOut(credentials) {
    if(credentials) {
        //DELETE user session
        await usersAPI.logout(credentials)
        //remove token
        localStorage.removeItem("token")
        // return console.log("logged out")
        return true
    } else { 
        // return console.log("no user to log out")
        return false
    }
}

export async function login(credentials) {
    //should be creating a token by loggin in 
    const token = await usersAPI.login(credentials)
    //save the token, return the user
    localStorage.setItem("token", token.user.token)
    return getUser()
}