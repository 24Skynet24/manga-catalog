import {lazy} from "react";
const MangaList = lazy(() => import("../../modules/MangaList"))

const HomePage = () => {
    return (
        <main className="c_container">
            <MangaList sectionName={"Manga online"} params={{}}/>
        </main>
    )
}

export default HomePage;