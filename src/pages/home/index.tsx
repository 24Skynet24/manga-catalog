import {lazy} from "react"
const LatestList = lazy(() => import("../../modules/LatestList"))
const MangaSlider = lazy(() => import("../../modules/MangaSlider"))
const TopTags = lazy(() => import("../../modules/TopTags"))


const HomePage = () => {
    return (
        <main className="c_container">
            <MangaSlider sectionName={"Manga online"} params={{}}/>
            <TopTags/>
            <LatestList/>
        </main>
    )
}

export default HomePage