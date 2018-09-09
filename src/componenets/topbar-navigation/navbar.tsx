import * as React from "react";
import * as NavBarItem from "./navbarItem";

interface NavBarProps {
  items: Array<any>;
}

export class NavBar extends React.Component<NavBarProps, any> {
  items: Array<JSX.Element>;

  private generateItem(item: NavBarItem.NavBarItemProps) {
    return (
      <NavBarItem.NavBarItem
        key={item.url}
        text={item.text}
        url={item.url}
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
