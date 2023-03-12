import sendRequest from './send-request'


const BASE_URL = "/tennis/matches/"

export async function show() {
    return sendRequest(BASE_URL, "GET")
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