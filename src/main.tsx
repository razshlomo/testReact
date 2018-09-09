import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import * as React from "react";
import { render } from "react-dom";
import { NavBar } from "./componenets/topbar-navigation/navbar";
import {
  data,
  RouteData
} from "./componenets/topbar-navigation/navigation-data";
import "./app.css";
import * as Pages from "./componenets/pages"



class MyClass extends React.Component<{}, {}> {
  routes: Array<any>;
  pagesStore: object;

  constructor(props) {
    super(props);
    this.pagesStore = {};
    this.routes = data.map(this.generateRouteFromRouteData);
  }


  private static getClassFromName(className: string) {
    if (Pages[className] === undefined || Pages[className] === null) {
      throw new Error(`Class type of \'${className}\' is not in the pages store`);
    }
    return Pages[className];
  }

  private generateRouteFromRouteData(item: RouteData) {

    const page = MyClass.getClassFromName(item.componentName);

    return <Route exact={item.exact} key={item.url} path={item.url} component={page} />;
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar items={data} />
          <Switch>
            {this.routes}
            <Redirect from="*" to="/home" />
          </Switch>
        </div>
      </Router>
    )
  }
}

render(<MyClass />, document.getElementById("app"));
