import API from "../plugins/API"

export default {
    getMangaLatestList: async () => {
        const data = await API({url: "/latest"})
        return data.data
    }
}