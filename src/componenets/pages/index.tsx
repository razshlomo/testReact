export { default as HomePage } from "./HomePage/HomePage"
export { AboutPage } from "./AboutPage/Aboutpage"
export { MyGallery } from "./MyGallery/MyGallery"

export interface RouteData {
    text: string;
    url: string;
    componentName: string;
    exact: boolean
}
export const data: Array<RouteData> = [
    {
        text: "Home",
        url: "/home",
        componentName: "HomePage",
        exact: false
    },
    {
        text: "My Gallery",
        url: "/gallery",
        componentName: "MyGallery",
        exact: false
    },
    {
        text: "About",
        url: "/about",
        componentName: "AboutPage",
        exact: false
    },
]
