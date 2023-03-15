import sendRequest from './send-request'

const BASE_URL = "/tennis/matches/"

export async function show() {
    return sendRequest(BASE_URL, "GET")
}

//endpoint for 3rd Party Call
export async function get_by_date(date_string) {
    return sendRequest(`${BASE_URL}/get-by-date/${date_string}/`, "GET")
}