import React from 'react'

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
        <h3>ツイート機能</h3>
        
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

        <button
            onClick={props.onClick}
            disabled={props.isDisabled}>
        ツイート
        </button>
        </>
    )
}

