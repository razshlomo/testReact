import * as React from "react";
import * as NavBarItem from "./navbarItem";

interface NavBarProps {
  items: Array<any>;
  OnNavigationClick: React.MouseEventHandler<HTMLAnchorElement>;
}

export class NavBar extends React.Component<NavBarProps, any> {
  items: Array<any>;

  private generateItem(item: NavBarItem.NavBarItemProps) {
    return (
      <NavBarItem.NavBarItem
        text={item.text}
        url={item.url}
        submenu={item.submenu}
        OnNavigationClick={item.OnNavigationClick}
      />
    );
  }

  constructor(props: NavBarProps) {
    super(props);
    this.items = this.props.items.map(this.generateItem);
  }

  render() {
    return (
      <div className="menu__wrapper1">
        <div className="menu__wrapper">
          <ul className="menu">{this.items}</ul>
        </div>
      </div>
    );
  }
}
