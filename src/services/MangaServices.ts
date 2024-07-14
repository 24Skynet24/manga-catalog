import API from "../plugins/API"

export default {
    getMangaLatestList: async () => {
        try {
            const data = await API({url: "/latest"})
            return data.data
        }
        catch (err) {
            console.error("ERROR Latest List " + err)
            return []
        }
    }
}