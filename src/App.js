import React, { Component } from 'react';
import './App.css';
import Header from './container/Header';
import ContextData from './container/ContextData';
import styled from 'styled-components';

const Game = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: column; 
    margin: auto;
  `;
class App extends Component {

  keywords = ['MALLIKA', 'SIDDHANT', 'DEVANG', 'ARAVIND', 'VINAY', 'REHAAN', 'DHANANJAY', 'ASHUTOSH', 'MUGDHA']
  

  constructor(props) {
    super(props);
    const wordIndex = Math.floor(Math.random() * 9)
    const word = this.keywords[wordIndex];
    
    this.state = {
      word: word,
      unguessedWord: '-'.repeat(word.length),
      numberOfGuesses: 0,
      display: new Array(26).fill(true),
      reset : true,
      
    }
  }


  showAnswer = () => {
    if(this.state.numberOfGuesses===4){
      this.setState({
        unguessedWord : this.state.word
      })
      console.log(this.state.unguessedWord)
    }
  }

  newGame = () => {
    const wordIndex = Math.floor(Math.random() * 9)
    const word = this.keywords[wordIndex];
    this.setState({
      word: word,
      unguessedWord: '-'.repeat(word.length),
      numberOfGuesses: 0,
      display: new Array(26).fill(true),
      reset:true
    });
    //console.log(this.state.display)
  }

  incrementGuess = () => {

    let noOfGuesses = this.state.numberOfGuesses
    noOfGuesses++;
    this.setState({

      numberOfGuesses: noOfGuesses

    });
  }

  guess = (alphabet, letterIndex) => {
    this.showAnswer()
    let word = this.state.word
    if (this.state.display[letterIndex]) {
      console.log(this.state.display)
      if (word.includes(alphabet)) {
        let updatedWord = Array.prototype.map.call(this.state.unguessedWord, ele => ele)
        let wordUpdated = Array.prototype.map.call(this.state.word, ele => ele)
        let index = []
        for (let i = 0; i < word.length; i++) {
          if (wordUpdated[i] === alphabet)
            index.push(i)
        }
        for (let i of index) {
          updatedWord[i] = alphabet;
        }
        wordUpdated = wordUpdated.map((ele, ind) => ind === index ? "*" : ele)

        this.setState((state) => {
          return {
            ...state,
            unguessedWord: updatedWord,
            word: wordUpdated
          };
        });

      }
      else {
        this.incrementGuess()
      }
      this.setState((state) => {
        return {
          ...state,
          display: this.state.display.map((ele, ind) => ind === letterIndex ? false : ele),
          reset:false,
        };
      });
    }
  }

  render() {
    return (
      <Game>
        <Header newGame={this.newGame} count={this.state.numberOfGuesses} />
        <ContextData word={this.state.word} unguessedWord={this.state.unguessedWord} 
                     count={this.state.numberOfGuesses} guess={this.guess}
                     reset={this.state.reset}/>
      </Game>
    )
  }

}

export default App;
