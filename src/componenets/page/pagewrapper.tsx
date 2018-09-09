import * as React from "react";

export interface Page {
  pageUrl: string;
  render();
}

export class PageWrapper extends React.Component<any, Array<any>> {
  private pages: Array<Page>;

  constructor(props: any) {
    super(props);
    this.pages = props.pages;
  }

  render() {
    let pageUrl = "home";
    if (this.state == null || this.state == undefined) {
      pageUrl = "home";
    } else {
      pageUrl = this.state[this.state.length - 1].page;
    }

    const foundPages = this.pages.find(page => page.pageUrl === pageUrl);

    if (foundPages == undefined) {
      return <div />;
    }

    return foundPages.render();
  }
} 
