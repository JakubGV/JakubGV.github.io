import { Component } from 'react';
import './TypingText.css';

type TypingTextProps = {
  textOptions: string[]
}

type TypingTextState = {
  currrentText: string
}

export class TypingText extends Component <TypingTextProps, TypingTextState>  {
  state = {
    currrentText: ''
  }

  waitForMs = (delay: number) => {
    return new Promise(res => setTimeout(res,delay) );
  }

  typeWords = async (words: string, delay = 100) => {
    const letters = words.split("");
    
    for (let i = 0; i < letters.length; i++) {
      await this.waitForMs(delay);
      this.setState(prevState => ({
        currrentText: prevState.currrentText + letters[i]
      }));
    }
  }

  deleteWords = async (delay = 100) => {
    const words = this.state.currrentText;
    const letters = words.split("");
    
    while (letters.length > 0) {
      await this.waitForMs(delay);
      letters.pop();
      this.setState({
        currrentText: letters.join("")
      })
    }
  }

  carousel = async () => {
    let i = 0;
    
    while(true) {
      await this.typeWords(this.props.textOptions[i]);
      await this.waitForMs(1500);
      await this.deleteWords();
      await this.waitForMs(500);
      i++;
      if (i >= this.props.textOptions.length) i = 0;
    }
  }

  componentDidMount(): void {
    this.carousel();
  }

  render() {
    return (
      <>
        <span>&nbsp;{this.state.currrentText}</span>
        <span className="cursor"></span>
      </>
    )
  }
}