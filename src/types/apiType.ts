export interface ApiArgs {
    url: string,
    query?: ApiObjectsType
    headers?: ApiObjectsType
    method?: string,
    body?: string
}

interface ApiObjectsType {
    [key: string]: string | number | string[]
}
