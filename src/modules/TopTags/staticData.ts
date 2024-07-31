import {TagCardType} from "../../types/mangaTagType";

import comedyImg from "@/assets/img/tags/comedy.png"
import fantasyImg from "@/assets/img/tags/fantasy.png"
import dramaImg from "@/assets/img/tags/drama.jpg"
import romanceImg from "@/assets/img/tags/romance.png"

const topTags: TagCardType[] = [
    {
        url: "/catalog?tags=comedy",
        img: comedyImg,
        name: "Comedy",
    },
    {
        url: "/catalog?tags=fantasy",
        img: fantasyImg,
        name: "Fantasy",
    },
    {
        url: "/catalog?tags=drama",
        img: dramaImg,
        name: "Drama",
    },
    {
        url: "/catalog?tags=romance",
        img: romanceImg,
        name: "Romance",
    },
]

export {
    topTags
}