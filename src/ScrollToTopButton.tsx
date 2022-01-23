import { FunctionComponent, useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import './ScrollToTopButton.css';
import upArrow from './media/up_arrow.svg';

type ScrollToTopButtonProps = {
  displacement: number
}

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
      <img className="arrow" src={upArrow} alt="Up arrow"/>
    </div>
  )
}