import React from 'react'
import styled from 'styled-components'


const KeyboardContainer = styled.div`
    width: 46% ;
    background-color: #B3F2FF;
    overflow :hidden;
    border-radius: 10px;
    align-content: center;
    padding: 20px 20px;
    margin-left: 25%;
`

const KeyDiv = styled.div`
    height : 50px;
    width : 60px;
    color : #002AFF;
    background-color: #80D4FF;
    border-radius : 10px;
    margin:10px 10px 10px 10px;
    float:left;
    text-align : center;
    font-size : 25px;
    font-weight: bold;
    padding-top: 10px;
    &:hover{
        background-color: #002AFF;
        color : #80D4FF;
    }
`

const SDiv = styled(KeyDiv)`
    margin-left:50px;
`

const rows = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

const keyboardGenerator = (guess) => {
    return rows.map(
        element => element==='S' ? 
            <SDiv key={element} onClick={() => {guess(element)}} value={element}>{element}</SDiv> : 
            <KeyDiv key={element} onClick={() => {guess(element)}} value={element}>{element}</KeyDiv>)
}

const Keyboard = (props) => {
    return( 
        <KeyboardContainer>
              {keyboardGenerator(props.guess)}
        </KeyboardContainer>
    )
}

export default Keyboard;