import {lazy} from "react";
const MangaSlider = lazy(() => import("../../modules/MangaSlider"))
const TopTags = lazy(() => import("../../modules/TopTags"))


const HomePage = () => {
    return (
        <main className="c_container">
            <MangaSlider sectionName={"Manga online"} params={{}}/>
            <TopTags/>
        </main>
    )
}

export default HomePage;