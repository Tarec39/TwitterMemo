import { RefObject } from "react"

type Props = {
    inputEl: RefObject<HTMLTextAreaElement>
    onClick: () => any
    // onChange: () => any
    // isDisabled: boolean
}

export const MakeTweet = (props: Props) => {
    return(
        <>
        <h2>ツイートの作成</h2>
        {/* onChange={props.onChange} */}
        <textarea  ref={props.inputEl} style={{resize:'none', width:'300px', height:'200px'}}></textarea>
        {/* disabled={props.isDisabled} */}
        <button onClick={props.onClick}>ツイート</button>
        </>
    )
}