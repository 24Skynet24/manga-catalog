import "./latestList.scss"
import {useEffect, useState} from "react";
import {MangaType} from "../../types/mangaType";
import services from "../../services";
import collectingMangaCover from "../../utils/collectingMangaCover";
import {imgUrl} from "../../utils/getImgUrl";
import {getHourAgo} from "../../utils/datesHelper"
import addMangaListCovers from "../../utils/addMangaListCovers";
import {Link} from "react-router-dom";

const LatestList = () => {
    const [mangaList, setList] = useState<MangaType[]>([])
    useEffect(() => {
        const getFetch = async () => {
            const res = await services.MangaServices.getLatestMangaList(30)
            const coverArts = collectingMangaCover(res)
            const mangaCovers = await services.MangaServices.getMangaCover(coverArts, 30)
            addMangaListCovers(res, mangaCovers)
            res.sort((a, b) => {
                return new Date(b.attributes.updatedAt) - new Date(a.attributes.updatedAt)
            })
            setList(res)
        }
        getFetch().then(r => r)
    }, [])

    const list = mangaList.map((el, id) => {
        return <li key={id}>
                <Link to={`/title/${el.id}`}>
                    <div className="img_block" style={{backgroundImage: imgUrl(el.id, el.attributes.img)}}/>
                </Link>
                <div className="text_block">
                    <h6>
                        <Link to={`/title/${el.id}`}>{el.attributes.title.en}</Link>
                    </h6>
                    <Link to={`/title/${el.id}`} className="text_block_update">
                        {getHourAgo(el.attributes.updatedAt)}
                    </Link>
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