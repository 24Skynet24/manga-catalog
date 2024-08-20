import {ApiArgs} from "../types/apiType";

export default async function ({url, query, method = 'GET', headers, body}: ApiArgs) {
    let baseUrl: string = import.meta.env.VITE_API_URL_PROD + url

    if (query) {
        baseUrl += "?"
        Object.keys(query).map(key => {
            baseUrl += `${key}=${query[key]}&`
        })
    }

    const defaultHeaders: Headers = new Headers()
    if (headers) Object.keys(headers).map(key => {
        defaultHeaders.set(key, `${headers[key]}`)
    })

    try {
        const res = await fetch(baseUrl, {method, body, headers: defaultHeaders})
        return await res.json()
    }
    catch (e) {
        console.error("Error", e)
        return {error: e}
    }
}
