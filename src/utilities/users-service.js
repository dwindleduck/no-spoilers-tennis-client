import * as usersAPI from "./users-api"

export async function signUp(userData) {
    console.log("****** Sign Up Function *****")
    const token = await usersAPI.signUp(userData)
    console.log("getting past await signup")
    console.log(token)
    // localStorage.setItem("token", token)
    // return getUser()
    return login(userData)
}

export function getToken() {
    
    //get token from localStorage
    const token = localStorage.getItem("token")
    console.log(token)
    if(!token) return null
    return token

    // //get token's payload
    // const payload = token.split(".")[1]
    // //JWT's are base64 encoded
    // //need to decode it to make it useable 
    // //gives us a json user object
    // const decodedPayload = atob(payload)

    // const parsedPayload = JSON.parse(decodedPayload)

    // //check if expired, convert to seconds ( / 1000 )
    // if(parsedPayload.exp < Date.now(0) / 1000) {
    //     //the token has expired, remove it
    //     localStorage.removeItem("token")
    //     return null
    // } else {
    //     return token
    // }
}

export function getUser() {
    const token = getToken()
    if(token){
        // const payload = token.split(".")[1]
        // const decodedPayload = atob(payload)
        // const parsedPayload = JSON.parse(decodedPayload)
        // return parsedPayload.user
        return token
    } else {
        return null
    }
}

export function logOut() {
    localStorage.removeItem("token")
    localStorage.removeItem("userName")
    localStorage.removeItem("userId")
}

export async function login(credentials) {
    //should be creating a token by loggin in 
    const token = await usersAPI.login(credentials)
    //save the token, return the user
    localStorage.setItem("token", token.user.token)
    localStorage.setItem("userName", token.user.email)
    localStorage.setItem("userId", token.user.id)
    console.log(token)
    return getUser()
}

// export function checkToken() {
//     return usersAPI.checkToken()
//         .then(dateString => new Date(dateString))
// }
