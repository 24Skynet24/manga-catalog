import "./chaptersList.scss"
import {MangaChapterScanGroup} from "../../types/mangaType"
import {useEffect, useState} from "react"
import services from "../../services"


const checkChapterName = (cpName: string | null) => {
    if (!cpName) return
    return <span className="name" title={cpName}>{cpName}</span>
}
const checkScanGroup = (scanGroups: MangaChapterScanGroup[], chapterRel): string => {
    let name: string = ""
     scanGroups.map(el => {
        chapterRel.map(rel => {
            if (rel.type === "scanlation_group" && rel.id === el.id) name = el.attributes.name
        })
    })
    return name
}

const ChaptersList = ({ chapters, scanGroupsId }) => {

    const [scanGroups, setScanGroups] = useState<MangaChapterScanGroup[]>([])
    useEffect(() => {
        const getData = async () => {
            const res = await services.MangaServices.getScanGroups(await scanGroupsId)
            setScanGroups(res)
        }
        getData().then(r => r)
    }, [scanGroupsId])
    return (
        <>
            <ul className="flex flex-col chapters_list">
                {chapters?.map((el, i) => {
                    return <li key={i} className="flex flex-col">
                        <div className="chapter_name flex-align-center gap-2">
                            <span className="num">Chapter {el.attributes.chapter}</span>
                            {checkChapterName(el.attributes.title)}
                        </div>
                        <div className="chapter_create flex-align-center gap-3">
                            <span className="publishAt">{el.attributes.publishAt}</span>
                            <span className="publishAt">
                                {checkScanGroup(scanGroups, el.relationships)}
                            </span>
                        </div>
                    </li>
                })}
            </ul>
        </>
    )
}

export default ChaptersList