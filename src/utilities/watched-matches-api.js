import sendRequest from './send-request'

const BASE_URL = "/tennis/watched_matches/"

// this call get's match data from the selected day,
// refreshing the LiveScore API call if necessary,
// then checks if watch cards exist for each match, 
// creating them if necessary.
// returns watch cards with full match details
export async function create_and_get(date) {
    return sendRequest(`${BASE_URL}create_and_get/${date}/`, "GET")
}

// this is for changing the value of the spoil_results variable
export async function update(matchId, matchData) {
    return sendRequest(`${BASE_URL}${matchId}/`, "PATCH", matchData)
}


// Not in use:

// export async function show() {
//     return sendRequest(`${BASE_URL}`, "GET")
// }

// export async function create(matchData) {
//     return sendRequest(`${BASE_URL}`, "POST", matchData)
// }

// export async function getOne(matchId) {
//     return sendRequest(`${BASE_URL}${matchId}/`, "GET")
// }

// export async function remove(matchId) {
//     return sendRequest(`${BASE_URL}${matchId}/`, "DELETE")
// }