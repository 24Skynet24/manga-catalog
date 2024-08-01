import "./latestList.scss"
import {useEffect, useState} from "react";
import {MangaType} from "../../types/mangaType";
import services from "../../services";
import collectingMangaCover from "../../utils/collectingMangaCover";
import {imgUrl} from "../../utils/getImgUrl";

const date = (d): string => `${new Date(d).toDateString()}`

const LatestList = () => {
    const [mangaList, setList] = useState<MangaType[]>([])
    useEffect(() => {
        const getFetch = async () => {
            const res = await services.MangaServices.getLatestMangaList()
            const coverArts = collectingMangaCover(res)
            const mangaCovers = await services.MangaServices.getMangaCover(coverArts)
            res.map(manga => {
                let rel = ""
                manga.relationships.map(relationship => { if (relationship.type === "cover_art") rel = relationship.id })
                mangaCovers.map(el => { if (rel === el.id) manga.attributes.img = el.attributes.fileName })
            })
            console.log(res)
            setList(res)
        }
        getFetch().then(r => r)
    }, [])

    const list = mangaList.map((el, id) => {
        return <li key={id}>
                <div className="img_block" style={{backgroundImage: imgUrl(el.id, el.attributes.img)}}/>
                <div className="text_block">
                    <h6>{el.attributes.title.en}</h6>
                    <span>{date(el.attributes.updatedAt)}</span>
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