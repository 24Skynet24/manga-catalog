import {MangaDefaultType} from "./index";


export interface MangaType extends MangaDefaultType{
    attributes: MangaAttributesType
    id: string
    relationships: MangaRelationshipsType[]
    type: string
}

export interface MangaCoverType extends MangaDefaultType{
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

export interface MangaTitleChapterType extends MangaDefaultType {
    attributes: {
        title: string
        volume: string
        chapter: string
        pages: number | string
        translatedLanguage: string
        uploader: string
        externalUrl: string | null
        version: number | string | null
        createdAt: string
        updatedAt: string
        publishAt: string
        readableAt: string
        scanGroupName?: string | null
    }
    id: string
    relationships: DefaultRelationshipsType[] | []
    type: string
}

export interface MangaChapterScanGroup extends MangaDefaultType {
    id: string
    type: string
    attributes: {
        name: string,
        altNames: MangaStringObjects[] | [],
        locked: boolean,
        website: string | null,
        ircServer: string | null,
        ircChannel: string | null,
        discord: string | null,
        contactEmail: string | null,
        description: string | null,
        twitter: string | null,
        mangaUpdates: string | null,
        focusedLanguages: string[],
        official: boolean,
        verified: boolean,
        inactive: boolean,
        publishDelay: string | null,
        exLicensed: boolean,
        createdAt: string,
        updatedAt: string,
        version: number
    }
    relationships: []
}

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

interface MangaRelationshipsType {
    id: string
    type: string
}

interface MangaAttributesType {
    title: MangaStringObjects | string
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

interface DefaultRelationshipsType {
    type: string
    id: string
    [key: string]: string;
}

interface MangaStringObjects {
    [key: string]: string;
}
