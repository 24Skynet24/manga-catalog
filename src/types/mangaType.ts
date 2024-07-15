export interface MangaType {
    attributes: MangaAttributesType
    id: string
    relationships: MangaRelationshipsType[]
    type: string
}

export interface MangaCoverType {
    attributes: {
        description: string,
        volume: string | number,
        fileName: string,
        locale: string,
        createdAt: string,
        updatedAt: string,
        version: string | number
    }
    id: string
    relationships: MangaStringObjects[]
    type: string
}

interface MangaRelationshipsType {
    id: string
    type: string
}

interface MangaAttributesType {
    title: MangaStringObjects
    altTitles: MangaStringObjects[]
    description: MangaStringObjects
    isLocked: boolean
    links: MangaStringObjects
    originalLanguage: string
    lastVolume: string
    lastChapter: string
    publicationDemographic: string
    status: string
    year: number
    contentRating: string
    tags: MangaTagsType[]
    state: string
    chapterNumbersResetOnNewVolume: boolean
    createdAt: string
    updatedAt: string
    version: number
    availableTranslatedLanguages: string[]
    latestUploadedChapter: string
    img?: string
}

interface MangaTagsType {
    attributes: {
        name: MangaStringObjects
        description: MangaStringObjects
        group: string
        version: number | string
    }
    id: string | number
    relationships: MangaRelationshipsType[],
    type: string
}

interface MangaStringObjects {
    [key: string]: string;
}
