import { RefObject } from "react"

type Props = {
    message: any
    onChange: (event:React.ChangeEvent<HTMLTextAreaElement>) => void
    onClick: () => void
}

export const MakeTweet = (props: Props) => {
    return(
        <>
        <h2>ツイートの作成</h2>

        <textarea
            name="message"
            value={props.message}
            onChange={e => props.onChange}
            style={{resize:'none', width:'300px', height:'200px'}
        }/>

        <button onClick={props.onClick}>ツイート</button>
        </>
    )
}