import { FunctionComponent } from 'react';
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
    <nav>
      <header>
        <h2 className="subheader"><a href="/">{props.header}</a></h2>
      </header>
      <div className="links">
        <ul>
        {
          props.sections.map( (tabName: string) => {
            return (
                <li className="navlink" key={tabName}>
                  <a href={"#" + tabName.toLowerCase()}>{tabName}</a>
                </li>
            )
          })
        }
        </ul>
      </div>
    </nav>
  )
}