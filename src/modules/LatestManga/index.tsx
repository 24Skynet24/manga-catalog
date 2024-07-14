import React, {useEffect, useState} from 'react'
import services from "../../services"
import {MangaType} from "../../types/mangaType"
import MangaCard from "../../components/MangaCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "./latestManga.scss"

const LatestManga = () => {
    const [latestList, setList] = useState<MangaType[]>([])
    useEffect(() => {
        const getFetch = async () => {
            const res = await services.mangaServices.getMangaLatestList()
            setList(res)
        }
        getFetch().then(r => r)
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