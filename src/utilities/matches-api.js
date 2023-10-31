import sendRequest from './send-request'

const BASE_URL = "/tennis/matches/"


export async function show(date) {
    return sendRequest(`${BASE_URL}${date}/`, "GET")
}

