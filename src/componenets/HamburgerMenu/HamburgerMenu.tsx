import React, { CSSProperties } from "react";

import "./HamburgerMenu.css";
import { Color } from "csstype";

const bemId = `DryLib__HamburgerMenu`;

/**
 *
 * @render react
 * @name HamburgerMenu
 * @description Animated hamburger menu
 * @example
 * {
 *  // Use #DryLib__HamburgerMenu { transform: scale(0.6); } to change size
 * }
 * <HamburgerMenu
 *    onClick={() => alert('clicked')}
 *    isOpen={false}
 *    isVisible
 *    colors={{
 *      open: 'white',
 *      closed: 'red'
 *    }}
 *  />
 */

interface MenuColors {
  closed: Color;
  open: Color;
  background: Color;
}

interface HamburgerProps {
  isVisible: boolean;
  isOpen: boolean;
  colors: MenuColors;
  onClick: (event: React.MouseEvent<HTMLParagraphElement>) => void;
}

export class HamburgerMenu extends React.Component<HamburgerProps, any> {
  isVisible: boolean;
  isOpen: boolean;
  colors: MenuColors;
  onClick: (event: React.MouseEvent<HTMLParagraphElement>) => void;
  style: CSSProperties;
  state = {
    isOpen: false
  };

  constructor(props: HamburgerProps) {
    super(props);
    this.state.isOpen = false;
    this.isVisible = props.isVisible;
    this.isOpen = props.isOpen;
    this.colors = props.colors;
    this.onClick = eventArgs => {
      this.isOpen = !this.isOpen;
      const currentState = this.state.isOpen;
      this.setState({ isOpen: !currentState });
      props.onClick(eventArgs);
    };
    this.style = this.isVisible
      ? { opacity: 1 }
      : { opacity: 0, pointerEvents: "none" };
  }

  render() {
    return (
      <div>
        <div
          id={`${bemId}__wrapper`}
          className={bemId + "__wrapper"}
          style={{ background: this.colors.background }}
        >
          <p
            id={`${bemId}_button`}
            className={`${bemId}__button`}
            onClick={this.onClick}
            style={{ background: this.colors.background }}
          >
            {["top", "middle", "bottom"].map(pos => (
              <span
                key={pos}
                className={this.state.isOpen ? "" : ""}
                style={{
                  background: this.isOpen
                    ? this.colors.open
                    : this.colors.closed
                }}
              />
            ))}
          </p>
          <p style={{ background: this.colors.background }}
            className={
              this.state.isOpen ? `${bemId}__menu__open` : `${bemId}__menu`
            }
          >
            <link rel="stylesheet" href="http://www.google.co.il" />
          </p>
        </div>
      </div>
    );
  }
}
