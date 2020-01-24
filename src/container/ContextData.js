import React from 'react'
import styled from "styled-components";

import Hangman from "../components/Hangman"
import Keywords from '../components/Keywords'
import Keyboard from '../components/Keyboard'

const GameArea = styled.div`
    width: 45%;
    margin-left:25%;
    display: block;
`;

const ContextData = (props) =>{
    return(
        <div>
            <GameArea>
                <Keywords word={props.word} unGuessedWord={props.unguessedWord}/>
                <Hangman count={props.count}/>
            </GameArea>
            <Keyboard guess={props.guess}/>
        </div>
    )
}

export default ContextData;