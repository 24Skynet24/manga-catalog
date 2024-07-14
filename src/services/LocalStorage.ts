export default {
    setTheme: (theme: string): void => {
        localStorage.setItem("mc-theme", theme)
    },
    getTheme: (): string => <string>localStorage.getItem("mc-theme"),
}