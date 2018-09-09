import {
  Router,
  HashRouter,
  Route,
  Switch,
  RouteProps
} from "react-router-dom";
import * as React from "react";
import { render } from "react-dom";
import { NavBar } from "./componenets/topbar-navigation/navbar";
import { PageWrapper, Page } from "./componenets/page/pagewrapper";
import {
  data,
  RouteData
} from "./componenets/topbar-navigation/navigation-data";
import "./app.css";

class MyClass extends React.Component<{}, {}> {
  routes: Array<any>;

  constructor(props) {
    super(props);

    this.routes = data.map(this.generateRouteFromRouteData);
  }

  private generateRouteFromRouteData(item: RouteData) {
    const Contact = () => <div>blablabla</div>;
    return <Route path="/contact" component={Contact} />;
  }

  render() {
    const index = () => {
      return(
        <HashRouter>
        <Switch>{this.routes}</Switch>
      </HashRouter>
      );
    };
    return (
      <div>
        <HashRouter>
          <Route exact path="/" component={index} />
        </HashRouter>
      </div>
    );
  }
}
/*
<NavBar OnNavigationClick={args => args.altKey} items={data} />
*/
render(<MyClass />, document.getElementById("app"));
