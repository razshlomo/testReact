import * as React from "react";
import { NavLink as Link } from 'react-router-dom';
import './navstyle.css'

export interface NavBarLinkProps {
  url: string;
  text: string;
}

export class NavBarLink extends React.Component<NavBarLinkProps, any> {

  constructor(props) {
    super(props);
  }

  render() {
    return <Link activeClassName="active_page_link" to={this.props.url}>{this.props.text}</Link>;
  }
}
 