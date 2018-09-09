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
    componentName: "FirstPage",
    exact: false
  },
  {
    text: "About",
    url: "/about",
    componentName: "SecondPage",
    exact: false
  },
  {
    text: "Contact Us",
    url: "/contact",
    componentName: "FirstPage",
    exact: false
  }
]