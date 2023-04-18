import { getToken } from "./users-service"

const BASE_URL = "https://no-spoilers-server.onrender.com"


export default async function sendRequest(url, method="GET", payload=null) {
    const options = { method }
    if (payload) {
        options.headers = { 
            "Accept": "application/json",
            "Content-Type": "application/json",
        }
        options.body = JSON.stringify(payload)
    }  

    const token = getToken()
    //if there's a token, include it in req
    if(token) {
        options.headers = options.headers || {}
        options.headers.Authorization = `Token ${token}`
    }

    const res = await fetch(BASE_URL + url, options) 
    if(res.ok) {
        if (res.status === 204) {
            return res
        } else {
            return (res.json())
        }
    } else {
        console.log(res.error)
        throw new Error("Bad Request")
    }
}