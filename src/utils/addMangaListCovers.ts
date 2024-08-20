import {MangaCoverType, MangaType} from "../types/mangaType";

export default (mangaList: MangaType[], coverList: MangaCoverType[]): void[] => {
    return mangaList.map(manga => {
        let rel = ""
        manga.relationships.map(relationship => { if (relationship.type === "cover_art") rel = relationship.id })
        coverList.map(el => { if (rel === el.id) manga.attributes.img = el.attributes.fileName })
    })
}