import React from 'react'

import {Title} from './Title'
import {Text} from './Text'
import {PostButton} from './PostButton'

type props = {
    //TweetBox
    onFocus: () => void
    onBlur: () => void
    //Title.tsx
    inputEl: string
    onChangeInputEl: (event: React.ChangeEvent<HTMLInputElement>) => void
    show: boolean
    
    //Text.tsx
    textareaEl: string
    onChangeTextareaEl: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    textareaRows: ()=>number
    
    //PostButton.tsx
    handlePostTweet: ()=>void
    handleIsDisabled: boolean
}

export const PostTweet = (props: props) => {
    const Rows = props.textareaRows()
    return(
        <div className="TweetBox"
            onClick={props.onFocus}
            onBlur={props.onBlur}
        >
            
            <h3>試験的</h3>
            <Title
                value={props.inputEl}
                onChange={props.onChangeInputEl}
                show={props.show}
            /> 

            <Text
                value={props.textareaEl}
                onChange={props.onChangeTextareaEl}
                rows={Rows}
            />
            <PostButton
                onClick={props.handlePostTweet}
                isDisabled={props.handleIsDisabled}
            />
        </div>
    )
}
