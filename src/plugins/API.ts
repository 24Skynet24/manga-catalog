import {ApiArgs} from "../types/api_type";

export default async function ({url, method = 'GET', headers, body}: ApiArgs) {
    const baseUrl: string = import.meta.env.VITE_API_URL

    const defaultHeaders: Headers = new Headers()
    defaultHeaders.set("x-rapidapi-key", import.meta.env.VITE_RAPIDAPI_KEY)
    defaultHeaders.set("x-rapidapi-host", import.meta.env.VITE_RAPIDAPI_HOST)
    if (headers) Object.keys(headers).map(key => {
        defaultHeaders.set(key, `${headers[key]}`)
    })

    try {
        const res = await fetch(baseUrl + url, {method, body, headers: defaultHeaders})
        return await res.json()
    }
    catch (e) {
        console.error("Error", e)
        return {error: e}
    }
}
