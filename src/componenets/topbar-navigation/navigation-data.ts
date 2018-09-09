export interface RouteData {
  text: string;
  url: string;
  componentName: string;
}
export const data: Array<RouteData> = [
  {
    text: "Home",
    url: "/",
    componentName: "FirstPage"
  },
  {
    text: "About",
    url: "/about",
    componentName: "SecondPage"

  },
  {
    text: "Contact Us",
    url: "/contact",
    componentName: "FirstPage"
  }
]