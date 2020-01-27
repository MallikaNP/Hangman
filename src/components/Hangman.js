import React from 'react'
import styled from 'styled-components'

const HangImage = styled.div`
    width:170px;
    height:240px;
    float:right;
    border-right:1px solid black;
    @media (max-width: 550px){
        width:85px;
        height:120px;
        margin-right:25px;
    }
`

const PartsContainer = styled.div`
    height:80px;
    overflow:hidden
    @media (max-width: 550px){
        height:40px;
    }
`

const Rope= styled.div`
    height: 18px;
    margin-left: 90px;
    border-left: 1px solid black;
    border-top: 1px solid black;
    display: block;
    @media (max-width: 550px){
        height:9px;
        margin-left:45px
    }
`

let Head = styled.div`
    width:60px;
    height:60px;
    margin-left:60px;
    border-radius:50%;
    border:1px solid black;
    display:none;
    @media (max-width: 550px){
        width:30px;
        height:30px;
        margin-left:30px;
    }
`
let LeftArm = styled.div`
    width:33%;
    height:60px;
    margin-left:34px;
    border-top:1px solid black;
    float:left;
    display: none;
    @media (max-width: 550px){
        height:30px;
        margin-left:17px;
    }
`

let Chest = styled.div`
    width:1px;
    border-left:1px solid black;
    height:80px;
    float:left;
    display: none;
    @media (max-width: 550px){
        height:40px;
    }
`
let Legs = styled.div`
    border-left:1px solid black;
    border-right:1px solid black;
    border-top:1px solid black;
    height: 45px;
    width: 55px;
    margin-left: 60px;
    display: none;
    @media (max-width: 550px){
        width:26px;
        height:22px;
        margin-left:30px;
    }
`

let RightArm = styled(LeftArm)`
    margin-left:0px;
`

const resetHangman = () =>{
    Head = styled(Head)`
        display:none;
    `
    LeftArm = styled(LeftArm)`
        display:none;
    `
    RightArm = styled(RightArm)`
    display:none;
    `
    Chest = styled(Chest)`
        display:none;
    `
    Legs = styled(Legs)`
        display:none;
    `
}

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
    if(props.reset){
        resetHangman()
    }
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