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
  wordIndex = Math.floor(Math.random() * 9)
  word = this.keywords[this.wordIndex];

  constructor(props) {
    super(props);
    this.state = {
      word: this.word,
      unguessedWord: '-'.repeat(this.word.length),
      numberOfGuesses: 0,
      display: new Array(26).fill('true')
    }
  }


  newGame = () => {
    this.setState((state) => {
      return {
        ...state,
        word: this.word,
        unguessedWord: '-'.repeat(this.word.length),
        numberOfGuesses: 0,
        display: this.state.display.map(ele => true)
      };
    });
  }

  incrementGuess = () => {
    const noOfGuesses = this.state.numberOfGuesses + 1
    
    this.setState((state) => {
      return {
        ...state,
        numberOfGuesses: noOfGuesses
      }
    });
    console.log(this.state.numberOfGuesses)
    if(noOfGuesses === 5)
    {
      
      alert('You lose!')
      this.newGame()
    } 
 }

  componentDidUpdate = () => {

  }

  guess = (alphabet, letterIndex) => {
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
          display: this.state.display.map((ele, ind) => ind === letterIndex ? false : ele)
        };
      });
    }
  }
  
  render() {
    return (
      <Game>
        <Header/>
        <ContextData word={this.state.word} unguessedWord={this.state.unguessedWord} count={this.state.numberOfGuesses} guess={this.guess} />
      </Game>
    )
  }

}

export default App;
