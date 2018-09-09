import * as React from "react";
import { Link } from 'react-router-dom';
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
    return <Link innerRef={() => this.state = { selectedPage: this.props.url }} to={this.props.url}>{this.props.text}</Link>;
  }
}
 