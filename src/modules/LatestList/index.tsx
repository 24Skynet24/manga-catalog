import "./latestList.scss"
import {useEffect, useState} from "react";
import {MangaType} from "../../types/mangaType";
import services from "../../services";
import collectingMangaCover from "../../utils/collectingMangaCover";
import {imgUrl} from "../../utils/getImgUrl";
import {getHourAgo} from "../../utils/datesHelper"

const LatestList = () => {
    const [mangaList, setList] = useState<MangaType[]>([])
    useEffect(() => {
        const getFetch = async () => {
            const res = await services.MangaServices.getLatestMangaList(30)
            const coverArts = collectingMangaCover(res)
            const mangaCovers = await services.MangaServices.getMangaCover(coverArts, 30)
            res.map(manga => {
                let rel = ""
                manga.relationships.map(relationship => { if (relationship.type === "cover_art") rel = relationship.id })
                mangaCovers.map(el => { if (rel === el.id) manga.attributes.img = el.attributes.fileName })
            })
            res.sort((a, b) => {
                return new Date(b.attributes.updatedAt) - new Date(a.attributes.updatedAt)
            })
            setList(res)
        }
        getFetch().then(r => r)
    }, [])

    const list = mangaList.map((el, id) => {
        return <li key={id}>
                <div className="img_block" style={{backgroundImage: imgUrl(el.id, el.attributes.img)}}/>
                <div className="text_block">
                    <h6>{el.attributes.title.en}</h6>
                    <span>
                         {getHourAgo(el.attributes.updatedAt)}
                    </span>
                </div>
            </li>
    })

    return (
        <section className="module_section latest_list">
            <h2>Latest updates</h2>
            <ul className="latest_list_container">
                {list}
            </ul>
        </section>
    )
}

export default LatestList