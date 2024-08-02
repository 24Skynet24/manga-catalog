import API from "../plugins/API"
import {MangaCoverType, MangaType} from "../types/mangaType";
import {MangaTagType} from "../types/mangaTagType";
import {getToDay} from "../utils/datesHelper";

export default {
    getMangaList: async (params): Promise<MangaType[]> | never => {
        if (!params.limit) params.limit = 25
        try {
            const data = await API({url: "/manga", query: params})
            return data.data
        }
        catch (err) {
            console.error("ERROR Manga List " + err)
            throw new Error(err)
        }
    },

    getLatestMangaList: async (limit: number = 25): Promise<MangaType[]> | never => {
        const query = {
            "order[latestUploadedChapter]": "desc",
            "updatedAtSince": `${getToDay()}`,
            limit: limit
        }
        try {
            const data = await API({url: "/manga", query: query})
            return data.data
        }
        catch (err) {
            console.error("ERROR Latest List " + err)
            throw new Error(err)
        }
    },

    getMangaCover: async (cover_arts: string[], limit:number = 25): Promise<MangaCoverType[]> | never => {
        let imagesQuery: string = ""
        cover_arts.map(el => {imagesQuery += `ids[]=${el}&`})
        imagesQuery += `limit=${limit}`

        try {
            const data = await API({url: `/cover?${imagesQuery}`})
            return data.data
        }
        catch (err) {
            console.error("ERROR Latest List " + err)
            throw new Error(err)
        }
    },

    getMangaTagsList: async (): Promise<MangaTagType[]> | never => {
        try {
            const data = await API({url: "/manga/tag"})
            return data.data
        }
        catch (err) {
            console.error("ERROR Manga List " + err)
            throw new Error(err)
        }
    }
}