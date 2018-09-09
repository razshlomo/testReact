import * as React from "react";
import { NavBar } from "./navbar";

import  * as NavBarLink from './navbarLink';

export interface NavBarItemProps {
  url: string;
  text: string;
}

export class NavBarItem extends React.Component<NavBarItemProps, any> {

  private generateLink() {
    return <NavBarLink.NavBarLink key={this.props.url} url={this.props.url} text={this.props.text} />;
  }

  private generateContent() {
    const content = [this.generateLink()];
    return content;
  }

  constructor(props: NavBarItemProps) {
    super(props);
    console.log("this is the state = " + this.state)
  }

  render() {
    var content = this.generateContent();
    return <li >{content}</li>;
  }
}
