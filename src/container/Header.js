import React from 'react';
import styled from 'styled-components'

const HeaderContainer = styled.div`
    width:45%;
    font-family: Didot;
    font-size: 50px;
    margin-left: 26%;
    margin-top: 25px;
    color: #002AFF;
    overflow:hidden;
`
const GameName = styled.div`
    width:30%;
    text-align:left;
    font-family: Didot;
    font-size: 50px;
    float:left;
    color: #002AFF;
    margin-top:40px;
    margin-left:50px;
`

const NewGame = styled.div`
    width:20%;
    float:right;
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
`

const Header = () => {
    return (
        <HeaderContainer>
            <GameName>HANGMAN</GameName>
            <NewGame >New Game</NewGame>
        </HeaderContainer>
    )
}


export default Header;