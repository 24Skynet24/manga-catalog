const getHourAgo = (dateString: string): number => {
    const now = new Date();
    const pastDate = new Date(dateString);
    const diffInMs = now - pastDate;
    return Math.floor(diffInMs / (1000 * 60 * 60))
}

const getToDay = (): string => {
    const date = new Date()
    const month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
    const day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`
    return `${date.getFullYear()}-${month}-${day}T00:00:00`
}


export  {
    getHourAgo,
    getToDay,
}