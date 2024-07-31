import {MangaDefaultType} from "./index";

export interface MangaTagType extends MangaDefaultType{
    id: string
    type: string
    attributes: {
        name: {
            en: string
        }
    }
    relationships: []
}

export interface TagCardType {
    url: string
    img: string
    name: string
}