import { FunctionComponent } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

type NavbarProps = {
  header: string,
  sections: string[]
}

/**
 * Renders a Navbar with the given `props.header` and `props.sections`
 * @param props 
 * @param props.header The header for the left or top of the page
 * @param props.sections The sections of the page to create menu links for
 * @returns `<Navbar />` component
 */
export const Navbar: FunctionComponent <NavbarProps> = (props) => {
  return (
    <div className="navbar">
      <header>
        <h2 className="subheader">{props.header}</h2>
      </header>
      <nav>
      {
        props.sections.map( (tabName: string, index: number) => {
          const divLinkName = tabName.toLowerCase();
          
          return (
            <div className="navlink" key={divLinkName} last-tab={index === props.sections.length - 1 ? "true" : "false"}>
              <Link to={divLinkName} smooth={true}>
                {tabName}
              </Link>
            </div>
          )
        })
      }
      </nav>
    </div>
  )
}