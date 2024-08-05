const getHourAgo = (pastDate: string): string => {
    const now = new Date()

    const diffInMs = now - new Date(pastDate)
    const diffInSeconds = Math.floor(diffInMs / 1000)
    const diffInMinutes = Math.floor(diffInSeconds / 60)
    const diffInHours = Math.floor(diffInMinutes / 60)

    if (diffInHours > 0) return `${diffInHours} hours ago`
    else if (diffInMinutes > 0) return `${diffInMinutes} minutes ago`
    else return `${diffInSeconds} seconds ago`
}

const getToDay = (): string => {
    const now: Date = new Date()
    let year: string | number = now.getFullYear()
    let month: string | number = now.getMonth() + 1
    let day: string | number = now.getDate()
    let hours: string | number = now.getHours()

    if (hours < 5) {
        hours = 20
        if (day === 1) {
            if (month === 1) {
                year -= 1
                month = 12
            } else month -= 1
            day = new Date(year, month, 0).getDate()
        } else day -= 1
    } else hours = String(hours).padStart(2, '0')

    month = String(month).padStart(2, '0')
    day = String(day).padStart(2, '0')

    return `${year}-${month}-${day}T${hours}:00:00`
}

const getDate = (date: string | Date): string => {
    return new Date(date).toLocaleDateString()
}


export  {
    getHourAgo,
    getToDay,
    getDate,
}