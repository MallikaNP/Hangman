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
    margin-top:20px;
    @media (max-width: 550px) {
        width:80%;
        margin-left: 50px;
        padding: 5px 5px;
      }
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
    @media (max-width: 550px) {
        height: 30px;
        width: 30px;
        font-size: 12px;
        margin: 1px 1px 1px 1px;
        padding-top:5px;
      }
`

const SDiv = styled(KeyDiv)`
    margin-left:50px;
`
// const disableDiv = (event) => {
//     event.target.Disabled
// }

const rows = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

const keyboardGenerator = (guess) => {
    return rows.map(
        (element, ind) => element==='S' ? 
            <SDiv key={ind} onClick={() => {guess(element, ind)}} value={element}>{element}</SDiv> : 
            <KeyDiv key={ind} onClick={() => {guess(element, ind)}} value={element}>{element}</KeyDiv>)
}

const Keyboard = (props) => {
    return( 
        <KeyboardContainer>
              {keyboardGenerator(props.guess)}
        </KeyboardContainer>
    )
}

export default Keyboard;