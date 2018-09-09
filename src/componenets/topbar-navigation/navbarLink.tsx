import * as React from "react";
import { Link } from 'react-router-dom';
import './navstyle.css'

export interface NavBarLinkProps {
  url: string;
  text: string;
  OnNavigationClick: React.MouseEventHandler<HTMLAnchorElement>
}

export class NavBarLink extends React.Component<NavBarLinkProps, any> {
  OnNavigationClick: React.MouseEventHandler<HTMLAnchorElement>
  
  constructor(props) {
    super(props);  
    this.OnNavigationClick =props.OnNavigationClick
  }
 
  render() {  
    return <Link  to={this.props.url}>{this.props.text}</Link>;
  }
}
