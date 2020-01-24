import React from 'react'
import styled from 'styled-components'

const HangImage = styled.div`
    width:170px;
    height:240px;
    display: inline-block;
    border-right:1px solid black;
`

const PartsContainer = styled.div`
    height:80px;
    overflow:hidden
`

const Rope= styled.div`
    height: 18px;
    margin-left: 90px;
    border-left: 1px solid black;
    border-top: 1px solid black;
    display: block;
`

let Head = styled.div`
    width:60px;
    height:60px;
    margin-left:60px;
    border-radius:50%;
    border:1px solid black;
    display:none;
`
let LeftArm = styled.div`
    width:33%;
    height:60px;
    margin-left:34px;
    border-top:1px solid black;
    float:left;
    display: none;
`

let Chest = styled.div`
    width:1px;
    border-left:1px solid black;
    height:80px;
    float:left;
    display: none;
`
let Legs = styled.div`
    border-left:1px solid black;
    border-right:1px solid black;
    border-top:1px solid black;
    height: 45px;
    width: 55px;
    margin-left: 60px;
    display: none;
`

let RightArm = styled(LeftArm)`
    margin-left:0px;
`

const createHangman= (count) => {

    switch(count){
        case 1:
            Head = styled(Head)`
                display:block;
            `
            break;
        case 2:
            LeftArm = styled(LeftArm)`
                display:block;
            `
            break;
        case 3:
            RightArm = styled(RightArm)`
                display:block;
            `
            break;
        case 4:
            Chest = styled(Chest)`
                display:block;
            `
            break;
        case 5:
            Legs = styled(Legs)`
                display:block;
            `
            break;
        default:
             break
    }
}

const Hangman = (props) => {
    createHangman(props.count)
    return(
        <HangImage>
            <PartsContainer>
                <Rope></Rope>
                <Head></Head>
            </PartsContainer>
            <PartsContainer>
                <LeftArm></LeftArm>
                <Chest></Chest>
                <RightArm></RightArm>
            </PartsContainer>
            <PartsContainer>
                <Legs></Legs>
            </PartsContainer>
        </HangImage>
    )
}

export default Hangman;