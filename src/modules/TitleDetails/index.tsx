import {useEffect, useState} from "react"
import {MangaType, MangaTitleChaptersType} from "../../types/mangaType"
import services from "../../services"
import {imgUrl} from "../../utils/getImgUrl"
import "./titleDetails.scss"
import {Link} from "react-router-dom";
import {getDate} from "../../utils/datesHelper";
import TitleTag from "../../UI/Links/TitleTag";

const checkChapterName = (cpName: string | null) => {
    if (!cpName) return
    return <span className="name" title={cpName}>{cpName}</span>
}

const TitleDetails = ({ mangaId }) => {
    const [title, setTitle] = useState<MangaType>()
    const [chapters, setChapters] = useState<MangaTitleChaptersType[]>()
    useEffect(() => {
        const getTitle = async (): Promise<void> => {
            const res = await services.MangaServices.getMangaTitle(mangaId)
            const cover = await services.MangaServices.getTitleCover(res.relationships.filter(i => i.type === "cover_art")[0].id)
            const cps = await services.MangaServices.getTitleChapters(mangaId)

            res.attributes.img = cover.attributes.fileName
            res.attributes.title = Object.values(res.attributes.title)[0]
            cps.map(el => el.attributes.publishAt = getDate(el.attributes.publishAt))
            cps.sort((a, b) => {
                return b.attributes.chapter - a.attributes.chapter
            })

            console.log(cps)

            setTitle(res)
            setChapters(cps)
        }
        getTitle().then(r => r)
    }, [mangaId])

    return (
        <section className="title flex flex-col">
            <div className="title_header flex">
                <div className="title_header_img" style={{backgroundImage: imgUrl(mangaId, title?.attributes.img)}}/>
                <div className="title_header_info flex flex-col justify-between">
                    <div className="flex flex-col">
                        <h1>{title?.attributes.title}</h1>
                        <div className="flex-align-center title_add_info">
                            {/* Links */}
                            <div className="title_add_info-item">
                                <Link to={`/catalog?year=${title?.attributes.year}`}>{title?.attributes.year} y.</Link>
                            </div>
                            <div className="title_add_info-item">
                                <Link to={`/catalog?contentRating=${title?.attributes.contentRating}`}>{title?.attributes.contentRating}</Link>
                            </div>
                        </div>
                        <ul className="alt_titles flex flex-wrap">
                            {title?.attributes.altTitles.map((el, id) => {
                                return <li key={id}><h3>{Object.values(el)[0]}</h3></li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="title_content flex flex-col">
                <div className="description">
                    <h4>Description</h4>
                    <p>{title?.attributes.description.en}</p>
                </div>
                <div className="tags">
                    <h4>Tags</h4>
                    <ul className="flex flex-align-center">
                        {title?.attributes.tags.map((el, i) => {
                            return <li key={i}><TitleTag tagName={el.attributes.name.en} /></li>
                        })}
                    </ul>
                </div>
                <div className="chapters_recommendations flex">
                    <div className="chapters">
                        <h4>Chapters</h4>
                        <ul className="flex flex-col">
                            {chapters?.map((el, i) => {
                                return <li key={i} className="flex flex-col">
                                    <div className="chapter_name flex-align-center gap-2">
                                        <span className="num">Chapter {el.attributes.chapter}</span>
                                        {checkChapterName(el.attributes.title)}
                                    </div>
                                    <div className="chapter_create flex-align-center gap-3">
                                        <span className="publishAt">{el.attributes.publishAt}</span>
                                        {/*<span className="publishAt">{el.relationships}</span>*/}
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                    {/*  Recommendations module  */}
                </div>
            </div>
        </section>
    )
}

export default TitleDetails