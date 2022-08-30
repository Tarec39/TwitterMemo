import { RefObject } from "react"

type Props = {
    inputEl: RefObject<HTMLTextAreaElement>
    onClick: () => any
    onChange: () => any
}

export const MakeTweet = (props: Props) => {
    return(
        <>
        <h2>ツイートの作成</h2>
        <textarea onChange={props.onChange} ref={props.inputEl} style={{resize:'none', width:'300px', height:'200px'}}></textarea>
        <button onClick={props.onClick}>ツイート</button>
        </>
    )
}