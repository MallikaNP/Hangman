import React from 'react';
import styled from 'styled-components'

const HeaderContainer = styled.div`
    width:45%;
    margin-left: 26%;
    margin-top: 25px;
    color: #002AFF;
    display:flex;
    flex-flow:row;
    @media (max-width: 550px){
        width:80%;
        margin:top:12px;
    }
`
const GameName = styled.div`
    width:40%;
    text-align:left;
    font-family: Didot;
    font-size: 50px;
    color: #002AFF;
    margin-top:40px;
    margin-left:50px;
    @media (max-width: 550px){
       font-size:25px;
       margin:top:20px;
       margin-left:25px;
    }
`

const NewGame = styled.div`
    width:20%;
    border-radius: 5px;
    padding: 20px 20px;
    text-align:center;
    font-family: Didot;
    font-size: 25px;
    margin-left:25%;
    margin-top: 25px;
    color: #002AFF;
    background-color: #80D4FF;
    margin-bottom:30px;
    &:hover{
        background-color: #002AFF;
        color : #80D4FF;
    }
    pointer: cursor;
    @media (max-width: 550px){
        padding:10px 10px;
        font-size:12px;
        margin-top:12px;
        margin-bottom : 15px;
    }
`

const Header = (props) => {
    let gameName = props.count<5 ? "HANGMAN" : "YOU LOSE!"
    
    return (
        <HeaderContainer>
            <GameName>{gameName}</GameName>
            <NewGame onClick={props.newGame}>New Game</NewGame>
        </HeaderContainer>
    )
}


export default Header;