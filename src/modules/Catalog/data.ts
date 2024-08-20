type CatalogFiltersType = {
    statuses: string[]
    years: number[]
    contentRatings: string[]
}

const catalogFilters: CatalogFiltersType = {
    statuses: [
        "Ongoing",
        "Completed",
        "Hiatus",
        "Cancelled"
    ],
    years: [
        2024,
        2023,
        2022,
        2021,
        2020
    ],
    contentRatings: [
        "Safe",
        "Suggestive",
        "Erotica",
        "Pornographic"
    ]
}

export {
    catalogFilters
}