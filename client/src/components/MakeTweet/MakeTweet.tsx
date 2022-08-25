import { RefObject } from "react"

type Props = {
    inputEl: RefObject<HTMLTextAreaElement>
    onClick: () => any
}

export const MakeTweet = (props: Props) => {
    return(
        <>
        <h2>ツイートの作成</h2>
        <textarea ref={props.inputEl}></textarea>
        <button onClick={props.onClick}>ツイート</button>
        </>
    )
}