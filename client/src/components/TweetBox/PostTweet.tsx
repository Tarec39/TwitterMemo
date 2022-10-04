import React from 'react'
import styled from 'styled-components'

import {Title} from './Title'
import {Text} from './Text'

type props = {
    //Title.tsx
    inputEl: string
    onChangeInputEl: (event: React.ChangeEvent<HTMLInputElement>) => void
    //Text.tsx
    textareaEl: string
    onChangeTextareaEl: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const PostTweet = (props: props) => {
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
            />
        </>
    )
}

const TweetBox = styled.div`

`