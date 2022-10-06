import React from 'react'

import {Title} from './Title'
import {Text} from './Text'
import {PostButton} from './PostButton'

type props = {

    //Title.tsx
    inputEl: string
    onChangeInputEl: (event: React.ChangeEvent<HTMLInputElement>) => void
    
    //Text.tsx
    html: string
    onInputDivEl: (event: React.FormEvent<HTMLDivElement>) => void
    textareaRows: ()=>number
    
    //PostButton.tsx
    handlePostTweet: ()=>void
    handleIsDisabled: boolean
    innerRef: React.RefObject<HTMLDivElement>
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
                html={props.html}
                onChange={props.onInputDivEl}
                // rows={Rows}
                innerRef={props.innerRef}
            />
            <PostButton
                onClick={props.handlePostTweet}
                isDisabled={props.handleIsDisabled}
            />
        </>
    )
}
