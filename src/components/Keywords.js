import React from 'react'
import styled from 'styled-components'

const Word = styled.div`
    width: 70%;
    height: 200px;
    text-align: left;
    padding: 20px 20px;
    font-family: Didot;
    font-size: 40px;
    color: #002AFF;
    margin-top:20px;
    letter-spacing:20px;
    line-height:150px;
    display: inline-block;
    float: left;
`



const Keywords = (props) => {
    return(
    <Word>{props.unGuessedWord}</Word>
    )
}

export default Keywords;