import { TweetData } from "../../types/Tweet";

import {DeleteBtn} from '../Buttons/DeleteBtn'

import styled from 'styled-components'
import {useState} from 'react'
type props = {
    tweet: TweetData
    handleDelete: (id:string) => void
    index: number
}

export const Tweet = (props: props) => {
    const id = props.tweet.id
    const [bool, setBool] = useState<boolean>(false)
    return(
    <_Tweet
        onMouseEnter={()=>setBool(true)}
        onMouseLeave={()=>setBool(false)}
    >
            {props.tweet.title !== ""
                ?<_Title>{props.tweet.title}</_Title>:''
            }
            {props.tweet.contents.map((i) => (
                <div key={props.index}>
                <Text><p>{i.text}</p></Text>
                <DeleteBtn onClick={props.handleDelete} id={id} isDisplay={bool}/>
            </div>
            ))}
        </_Tweet>
    )
}

const _Title = styled.div`
    font-size: 17px;
    font-weight: bold;
    line-height: 20px;
`
const _Tweet = styled.div`
    width: 300px;
    border: 1px solid #2F3336;
    height: fit-content;
    padding: 12px 16px 12px;
    border-radius: 10px;
    cursor: pointer;
    &:hover{box-shadow: 0px 8px 5px 0px #161515;}
    transition-duration: 0.218s;
    transition-timing-function: ease-in;
`
const Text = styled.div`
    margin-top: 5px;
    white-space: pre-wrap;
    `
