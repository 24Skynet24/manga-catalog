import {MangaType} from "../types/mangaType";

export default (mangas: MangaType[]): string[] => {
    const covers: string[] = []
    mangas.map(el => {
        el.relationships.map(rel => {
            if (rel.type === "cover_art") covers.push(rel.id)
        })
    })
    return covers
}