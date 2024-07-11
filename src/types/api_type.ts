export interface ApiArgs {
    url: string,
    headers?: ApiHeaders
    method?: string,
    body?: string
}

interface ApiHeaders {
    [key: string]: string | number;
}