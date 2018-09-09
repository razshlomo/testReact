import * as React from "react";
import { NavBar } from "./navbar";

import  * as NavBarLink from './navbarLink';

export interface NavBarItemProps {
  url: string;
  text: string;
  submenu: Array<any>;
  OnNavigationClick: React.MouseEventHandler<HTMLAnchorElement>;
}

export class NavBarItem extends React.Component<NavBarItemProps, any> {
  OnNavigationClick: React.MouseEventHandler<HTMLAnchorElement>;

  private generateLink() {
    return <NavBarLink.NavBarLink OnNavigationClick={this.OnNavigationClick} url={this.props.url} text={this.props.text} />;
  }

  private generateSubMenu() {
    return <NavBar OnNavigationClick={this.OnNavigationClick} items={this.props.submenu} />;
  }

  private generateContent() {
    const content = [this.generateLink()];
    if (this.props.submenu) {
      //If there is a submenu in our data for this item
      //We add a generated Submenu to our content
      content.push(this.generateSubMenu());
    }
    return content;
  }

  constructor(props: NavBarItemProps) {
    super(props);
    this.OnNavigationClick = props.OnNavigationClick;
  }

  render() {
    var content = this.generateContent();
    return <li>{content}</li>;
  }
}
