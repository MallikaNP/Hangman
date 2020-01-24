import React , {Component} from 'react';
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

  constructor(props){
    super(props);
    const keywords = ['MALLIKA','SIDDHANT','DEVANG','ARAVIND','VINAY','REHAAN','DHANANJAY','ASHUTOSH','MUGDHA']
    const wordIndex = Math.floor(Math.random()*9)
    const word = keywords[wordIndex];
    this.state = {
      word: "SIDDHANT",
      unguessedWord: '-'.repeat(word.length)
    }
    //console.log(this.state.unguessedWord)
  }

  guess = (alphabet) => {
    let word = this.state.word
    if(word.includes(alphabet) )
    {
      const index = word.indexOf(alphabet);
      let updatedWord = Array.prototype.map.call(this.state.unguessedWord, ele => ele)
      let wordUpdated = Array.prototype.map.call(this.state.word, ele => ele)
      updatedWord = updatedWord.map((ele, ind ) => ind===index ? alphabet : ele)
      wordUpdated = wordUpdated.map((ele, ind ) => ind===index ? "*" : ele)
      
      this.setState((state) => {
        return {
          ...state,
          unguessedWord: updatedWord,
          word : wordUpdated 
        };
      });
    } 
    else{
      //createHangman()
    } 
  }


  render(){
    return (
        <Game>
          <Header/>
          <ContextData word={this.state.word} unguessedWord={this.state.unguessedWord} guess={this.guess}/>
        </Game>
      )
  }
  
}

export default App;
