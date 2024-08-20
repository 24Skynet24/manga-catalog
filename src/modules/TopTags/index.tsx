import {topTags} from "./staticData"
import {lazy} from "react";
import "./topTags.scss"

const TagCard = lazy(() => import("../../components/MangaTagCard"))

const TopTags = () => {
    const tagCardsList = topTags.map((el, id) => {
        return <TagCard {...el} key={id}/>
    })

    return (
        <section className="module_section top_tags">
            <h2>Top Tags</h2>
            <div className="top_tags_container">
                {tagCardsList}
            </div>
        </section>
    )
}

export default TopTags