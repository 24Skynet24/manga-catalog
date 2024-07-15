import {useEffect, useState} from 'react'
import services from "../../services"
import {MangaType} from "../../types/mangaType"
import MangaCard from "../../components/MangaCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "./latestManga.scss"
import collectingMangaCover from "../../utils/collectingMangaCover";

const LatestManga = () => {
    const [latestList, setList] = useState<MangaType[]>([])
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
            setList(res)
        }
        getFetch()
    }, [])

    return (
        <>
            <section className="latest_updates">
                <h3>Latest Updates</h3>
                <div className="latest_updates_container">
                    <Swiper spaceBetween={10} slidesPerView={6}>
                        {latestList.map((el: MangaType, id: number) => {
                            return <SwiperSlide key={id}><MangaCard {...el}/></SwiperSlide>
                        })}
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default LatestManga