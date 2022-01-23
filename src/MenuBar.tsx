import { Component } from 'react';
import { Link } from 'react-scroll';
import './MenuBar.css';

type MenuBarProps = {
  sections: string[],
  header: string
}

type MenuBarState = {

}

export class MenuBar extends Component <MenuBarProps, MenuBarState>  {
  render() {
    return (
      <div className="menu-bar">
        <div className="name-left">
          <h1 className="name">{this.props.header}</h1>
        </div>
        <div className="row-right">
          {
            this.props.sections.map( (tabName: string) => {
              const divLinkName = tabName.toLowerCase();
              
              return (
                <div className="tab" key={divLinkName}>
                  <Link to={divLinkName} smooth={true}>
                    {tabName}
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}