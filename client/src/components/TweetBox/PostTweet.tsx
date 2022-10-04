import React from 'react'

import {Title} from './Title'

type props = {
    onInputElChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    inputEl: string
}

export const PostTweet = (props: props) => {
    return(
        <>
        <h3>ツイート機能</h3>
        <Title
            value={props.inputEl}
            onChange={props.onInputElChange}
        /> 
        </>
    )
}

