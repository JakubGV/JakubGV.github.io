import { FunctionComponent } from 'react';
import { Link } from 'react-scroll';
import './MenuBar.css';

type MenuBarProps = {
  header: string,
  sections: string[]
}

/**
 * Renders a MenuBar with the given `props.header` and `props.sections`
 * @param props 
 * @param props.header The header for the left or top of the page
 * @param props.sections The sections of the page to create menu links for
 * @returns `<MenuBar />` component
 */
export const MenuBar: FunctionComponent <MenuBarProps> = (props) => {
  return (
    <div className="menu-bar">
      <div className="name-left">
        <h1 className="name">{props.header}</h1>
      </div>
      <div className="row-right">
        {
          props.sections.map( (tabName: string, index: number) => {
            const divLinkName = tabName.toLowerCase();
            
            return (
              <div className="tab" key={divLinkName} last-tab={index === props.sections.length - 1 ? "true" : "false"}>
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