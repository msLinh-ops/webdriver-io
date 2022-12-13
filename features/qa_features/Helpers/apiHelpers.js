import request from "supertest";


async function GET(baseURL, endpoint, authToken, queryParam) {
    if (!baseURL || !endpoint) {
        console.log(`Missing ${baseURL}  or ${endpoint}`)
    }
    baseURL = baseURL.trim()
    endpoint = endpoint.trim()

    try {

        return await request(baseURL)
            .get(endpoint)
            .auth(authToken, { type: 'bearer' })
            .query(queryParam)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")


    } catch (error) {

        error.message = `Error in making request to ${baseURL} ${endpoint} with message ${error}`
        throw error
    }

}


async function POST(baseURL, endpoint, authToken, payload) {
    if (!baseURL || !endpoint) {
        console.log(`Missing ${baseURL}  or ${endpoint}`)
    }
    baseURL = baseURL.trim()
    endpoint = endpoint.trim()

    try {

        return await request(baseURL)
            .post(endpoint)
            .auth(authToken, { type: 'bearer' })
            .send(payload)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")


    } catch (error) {

        error.message = `Error in making request to ${baseURL} ${endpoint} with message ${error}`
        throw error
    }

}


async function PATCH(baseURL, endpoint,query,authToken, payload) {
    if (!baseURL || !endpoint) {
        console.log(`Missing ${baseURL}  or ${endpoint}`)
    }
    baseURL = baseURL.trim()
    endpoint = endpoint.trim()

    try {

        return await request(baseURL)
            .patch(endpoint)
            .query(query)
            .auth(authToken, { type: 'bearer' })
            .send(payload)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")


    } catch (error) {

        error.message = `Error in making request to ${baseURL} ${endpoint} with message ${error}`
        throw error
    }

}

async function DELETE(baseURL, endpoint, authToken, queryParam) {
    if (!baseURL || !endpoint) {
        console.log(`Missing ${baseURL}  or ${endpoint}`)
    }
    baseURL = baseURL.trim()
    endpoint = endpoint.trim()

    try {

        return await request(baseURL)
            .delete(endpoint)
            .auth(authToken, { type: 'bearer' })
            .query(queryParam)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")


    } catch (error) {

        error.message = `Error in making request to ${baseURL} ${endpoint} with message ${error}`
        throw error
    }

}
export default {GET, POST, PATCH, DELETE}


