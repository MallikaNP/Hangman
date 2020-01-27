import React from 'react'
import styled from 'styled-components'

const Word = styled.div`
    width: 70%;
    height: 50px;
    text-align: left;
    padding: 20px 20px;
    font-family: Didot;
    font-size: 40px;
    color: #002AFF;
    margin-top:20px;
    letter-spacing:20px;
    float:left;
    line-height:150px;
    display: inline-block;
    @media (max-width: 550px){
        height:30px;
        font-size:20px;
        letter-spacing:10px;
        padding:10px 10px;
    }
`


const Keywords = (props) => {
    return(
    <Word>{props.unGuessedWord}</Word>
    )
}

export default Keywords;