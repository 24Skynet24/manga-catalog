import API from "../plugins/API"
import {MangaCoverType, MangaType} from "../types/mangaType";

export default {
    getLatestMangaList: async (): Promise<MangaType[]> => {
        const query = {
            "order[latestUploadedChapter]": "asc",
            limit: 25
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

    getMangaCover: async (cover_arts: string[]): Promise<MangaCoverType[]> => {
        let imagesQuery: string = ""
        cover_arts.map(el => {imagesQuery += `ids[]=${el}&`})
        imagesQuery += "limit=25"

        try {
            const data = await API({url: `/cover?${imagesQuery}`})
            return data.data
        }
        catch (err) {
            console.error("ERROR Latest List " + err)
            throw new Error(err)
        }
    },
}