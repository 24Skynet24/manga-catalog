import "./catalog.scss"
import {FormControlLabel, Checkbox} from "@mui/material"
import {useEffect, useState} from "react"
import services from "../../services"
import {MangaTagType} from "../../types/mangaType"
import {catalogFilters} from "./data"

const colors: string[] = ["#B32525"]

const CatalogListItem = ({name, color}) => {
    return (
        <>
            <li>
                <FormControlLabel
                    label={name}
                    control={<Checkbox sx={{
                        '& .MuiSvgIcon-root': { fontSize: 20 },
                        color: colors[color],
                        '&.Mui-checked': {
                            color: colors[color],
                        },
                    }}/>}
                />
            </li>
        </>
    )
}

const Catalog = ({tagsSelect, yearSelect, contentRatingSelect}) => {
    const [tags, setTags] = useState<MangaTagType[]>([])
    useEffect(() => {
        const getTags = async () => {
            const res = await services.MangaServices.getMangaTagsList()
            res.sort((a,b) => a.attributes.name.en.localeCompare(b.attributes.name.en))
            setTags(res)
        }
        getTags().then(r => r)
    }, [])
    return (
        <section className="module_section">
            <h1>Catalog</h1>
            <div className="content_container flex-between">
                <div className="content"></div>
                <aside className="filters">
                    <h2>Filters</h2>
                    <form>
                        <ul className="flex flex-col filters_list">
                            <li className="filters_item">
                                <h5 className="filters_item_name">Year</h5>
                                <ul className="filters_item_row">
                                    {catalogFilters.years.map((el, id) => {
                                        return <CatalogListItem name={el} key={id} color={0}/>
                                    })}
                                </ul>
                            </li>
                            <li className="filters_item">
                                <h5 className="filters_item_name">Status</h5>
                                <ul className="filters_item_row">
                                    {catalogFilters.statuses.map((el, id) => {
                                        return <CatalogListItem name={el} key={id} color={0}/>
                                    })}
                                </ul>
                            </li>
                            <li className="filters_item">
                                <h5 className="filters_item_name">Content rating</h5>
                                <ul className="filters_item_row">
                                    {catalogFilters.contentRatings.map((el, id) => {
                                        return <CatalogListItem name={el} key={id} color={0}/>
                                    })}
                                </ul>
                            </li>
                            <li className="filters_item">
                                <h5 className="filters_item_name">Tags</h5>
                                <ul className="filters_item_list">
                                    {tags.map((el, id) => {
                                        return <CatalogListItem name={el.attributes.name.en} key={id} color={0}/>
                                    })}
                                </ul>
                            </li>
                        </ul>
                    </form>
                </aside>
            </div>
        </section>
    )
}

export default Catalog