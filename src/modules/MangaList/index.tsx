import {useEffect, useState, lazy} from 'react'
import services from "../../services"
import {MangaType} from "../../types/mangaType"
import { Swiper, SwiperSlide } from "swiper/react";
import "./mangaList.scss"
import collectingMangaCover from "../../utils/collectingMangaCover";

const MangaCard = lazy(() => import("../../components/MangaCard"))

const MangaList = ({sectionName, params}) => {
    const [mangaList, setList] = useState<MangaType[]>([])
    useEffect(() => {
        const getFetch = async () => {
            let res;
            if (params?.latest) res = await services.MangaServices.getLatestMangaList()
            else res = await services.MangaServices.getMangaList({})
            const coverArts = collectingMangaCover(res)
            const mangaCovers = await services.MangaServices.getMangaCover(coverArts)
            res.map(manga => {
                let rel = ""
                manga.relationships.map(relationship => { if (relationship.type === "cover_art") rel = relationship.id })
                mangaCovers.map(el => { if (rel === el.id) manga.attributes.img = el.attributes.fileName })
            })
            setList(res)
        }
        getFetch()
    }, [params?.latest])

    return (
        <>
            <section className="latest_updates">
                <h3>{sectionName}</h3>
                <div className="latest_updates_container">
                    <Swiper spaceBetween={10} slidesPerView={6}>
                        {mangaList.map((el: MangaType, id: number) => {
                            return <SwiperSlide key={id}><MangaCard {...el}/></SwiperSlide>
                        })}
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default MangaList