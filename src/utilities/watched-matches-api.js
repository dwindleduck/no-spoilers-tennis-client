import sendRequest from './send-request'


const BASE_URL = "/tennis/watched_matches/"

// export async function show() {
//     return sendRequest(BASE_URL, "GET")
// }

export async function show(date) {
    return sendRequest(`${BASE_URL}${date}/`, "GET")
}

export async function create(matchData) {
    return sendRequest(BASE_URL, "POST", matchData)
}

export async function remove(matchId) {
    return sendRequest(`${BASE_URL}${matchId}/`, "DELETE")
}

export async function update(matchId, matchData) {
    return sendRequest(`${BASE_URL}${matchId}/`, "PATCH", matchData)
}