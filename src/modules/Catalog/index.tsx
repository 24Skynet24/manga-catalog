import "./catalog.scss"
import {FormControlLabel, Checkbox} from "@mui/material";

const Catalog = ({tags, year, contentRating}) => {
    return (
        <section className="module_section">
            <h1>Catalog</h1>
            <div className="content_container flex-between">
                <div className="content"></div>
                <aside className="filters">
                    <h2>Filters</h2>
                    <form>
                        <ul className="flex flex-col">
                            <li className="filters_item">
                                <h5 className="filters_item_name">Year</h5>
                                <div className="filters_item_group">
                                    <FormControlLabel
                                        label="2024"
                                        control={<Checkbox sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 20 },
                                                color: "#B32525",
                                                '&.Mui-checked': {
                                                    color: "#B32525",
                                                },
                                            }}/>}
                                    />
                                </div>
                            </li>
                            <li className="filters_item">
                                <h5>Status</h5>
                            </li>
                            <li className="filters_item">
                                <h5>Content rating</h5>
                            </li>
                            <li className="filters_item">
                                <h5>Tags</h5>
                            </li>
                        </ul>
                    </form>
                </aside>
            </div>
        </section>
    )
}

export default Catalog