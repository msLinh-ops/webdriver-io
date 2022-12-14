// import request from "supertest";
import { request } from "https";

async function GET(baseURL, endpoint, authToken, queryParam) {
    if (!baseURL || !endpoint) {
        console.log(`Missing ${baseURL}  or ${endpoint}`)
    }
    baseURL = baseURL.trim()
    endpoint = endpoint.trim()

    try {

        return await request({
            hostname: baseURL, path: endpoint, method: "GET", searchParams: queryParam, headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer" + authToken
            }
        })

    } catch (error) {

        error.message = `Error in making request to ${baseURL}${endpoint} with message ${error}`
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

        return await request({
            hostname: baseURL,
            path: endpoint,
            method: "POST",
            auth: authToken,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Content-Length": Buffer.byteLength(JSON.stringify(payload))
            },

        })


    } catch (error) {

        error.message = `Error in making request to ${baseURL}${endpoint} with message ${error}`
        throw error
    }

}


async function PATCH(baseURL, endpoint, query, authToken, payload) {
    if (!baseURL || !endpoint) {
        console.log(`Missing ${baseURL}  or ${endpoint}`)
    }
    baseURL = baseURL.trim()
    endpoint = endpoint.trim()

    try {

        return await request({
            hostname: baseURL,
            path: endpoint,
            searchParams: query,
            method: "PATCH",
            auth: authToken,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Content-Length": Buffer.byteLength(JSON.stringify(payload))
            },

        })

    } catch (error) {

        error.message = `Error in making request to ${baseURL}${endpoint} with message ${error}`
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
        return await request({
            hostname: baseURL,
            path: endpoint,
            method: "DELETE",
            searchParams: queryParam,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            auth: authToken
        })


    } catch (error) {
        error.message = `Error in making request to ${baseURL}${endpoint} with message ${error}`
        throw error
    }

}
export default { GET, POST, PATCH, DELETE }


