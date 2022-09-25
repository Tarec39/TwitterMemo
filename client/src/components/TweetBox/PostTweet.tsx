import React from 'react'
import styled from 'styled-components'

type Props = {
    onInputElChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onTextAreaChange: (event:React.ChangeEvent<HTMLTextAreaElement>) => void
    onClick: () => void
    inputEl: string
    textAreaEl: string
    isDisabled: boolean
    visible: boolean
    handleIsVisible: () => any
}

export const PostTweet = (props: Props) => {
    return(
        <>
        <Form>
            <div>
                <input 
                    value={props.inputEl}
                    onChange={props.onInputElChange}
                    style={{ display: props.visible ? "block" : "none" }}
                    placeholder='タイトル'
                />
                
                <textarea
                    value={props.textAreaEl}
                    onChange={props.onTextAreaChange}
                    onClick={props.handleIsVisible}
                    placeholder="いまどうしてる?"
                />
            </div>
            <Button
                onClick={props.onClick}
                disabled={props.isDisabled}>
                ツイート
            </Button>
        </Form>
        </>
    )
}

const Form = styled.div`
display: flex;
flex-direction: column;
>div{
    display: flex;
    padding: 20px;
    flex-direction: column;
}
input{
    resize:'none'
    flex: 1;
    margin-left: 20px;
    font-size: 20px;
    font-weight: bold;
    border: none;
    outline: none;
    width: 100%;
    margin-bottom: 5px;
}
textarea {
    resize:'none'
    flex: 1;
    margin-left: 20px;
    font-size: 20px;
    border: none;
    outline: none;
    width: 100%;
}
`;


const Button = styled.button`
background-color: #50b7f5;
border: none;
color: white;
font-weight: 900;
border-radius: 30px;
width: 80px;
height: 40px;
margin-top: 20px;
margin-left: auto;
`;
