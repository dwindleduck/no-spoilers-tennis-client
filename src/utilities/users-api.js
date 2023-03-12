//-----Frontend Users API-----//
import sendRequest from './send-request'

const BASE_URL = "/tennis"

export async function signUp(userData) {
    return sendRequest(BASE_URL + "/sign-up/", "POST", userData)
}
export async function login(credentials) {
    return sendRequest(BASE_URL + "/sign-in/", "POST", credentials)
}
export async function logout(credentials) {
    return sendRequest(BASE_URL + "/sign-out/", "DELETE", credentials)
}