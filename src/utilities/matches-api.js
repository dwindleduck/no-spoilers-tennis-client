import sendRequest from './send-request'


const BASE_URL = "/tennis/matches/"

export async function show() {
    return sendRequest(BASE_URL, "GET")
}

//endpoint for 3rd Party Call
export async function get_by_date(date_string) {
    return sendRequest(`${BASE_URL}/get-by-date/${date_string}/`, "GET")
}



// export async function create(ingredientData) {
//     return sendRequest(BASE_URL, "POST", matchData)
// }

// export async function remove(ingredientId) {
//     return sendRequest(`${BASE_URL}${matchId}`, "DELETE")
// }

// export async function update(ingredientId, ingredientData) {
//     return sendRequest(`${BASE_URL}${matchId}`, "PATCH", matchData)
// }