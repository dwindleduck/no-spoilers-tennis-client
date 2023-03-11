import sendRequest from './send-request'

import axios from 'axios';
axios.defaults.withCredentials = true;

const BASE_URL = "/tennis/matches/"

export async function show() {
    return sendRequest(BASE_URL, "GET")
}
    // const response = await axios.get(BASE_URL,
    //     {'withCredentials': true });
    // console.log(response)
    // console.log(response.data);
    // return response




// export async function create(ingredientData) {
//     return sendRequest(BASE_URL, "POST", matchData)
// }

// export async function remove(ingredientId) {
//     return sendRequest(`${BASE_URL}${matchId}`, "DELETE")
// }

// export async function update(ingredientId, ingredientData) {
//     return sendRequest(`${BASE_URL}${matchId}`, "PATCH", matchData)
// }