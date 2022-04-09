import { FunctionComponent, useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import './ScrollToTopButton.css';
import upArrow from '../media/arrow_up.svg';

type ScrollToTopButtonProps = {
  displacement: number
}

/**
 * Renders a button that smoothly scrolls to the top of the page
 * @param props
 * @param props.displacement The vertical distance that must be travelled until the button appears 
 * @returns Clickable `<div>` with the image of an up arrow
 */
export const ScrollToTopButton: FunctionComponent <ScrollToTopButtonProps>  = (props) => {
  const [showButton, setShowButton] = useState('false');

  useEffect( () => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > props.displacement) {
        setShowButton('true');
      } else {
        setShowButton('false');
      }
    });
  }, [props]);

  return (
    <div className="arrow-button" onClick={scroll.scrollToTop} currently-visible={showButton}>
      <img className="arrow" src={upArrow} width="35" height="35" alt="Up arrow"/>
    </div>
  )
}