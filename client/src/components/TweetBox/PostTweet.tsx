import React from 'react'
import styled from 'styled-components'

import {Title} from './Title'
import {Text} from './Text'
import {PostButton} from './PostButton'

type props = {
    //Title.tsx
    inputEl: string
    onChangeInputEl: (event: React.ChangeEvent<HTMLInputElement>) => void
    //Text.tsx
    textareaEl: string
    onChangeTextareaEl: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    textareaRows: ()=>number
    //PostButton.tsx
    handlePostTweet: ()=>void
}

export const PostTweet = (props: props) => {
    const Rows = props.textareaRows()
    return(
        <>
            <h3>ツイート機能</h3>
            <Title
                value={props.inputEl}
                onChange={props.onChangeInputEl}
            /> 

            <Text
                value={props.textareaEl}
                onChange={props.onChangeTextareaEl}
                rows={Rows}
            />
            <PostButton
                onClick={props.handlePostTweet}
            />
        </>
    )
}

const TweetBox = styled.div`

`