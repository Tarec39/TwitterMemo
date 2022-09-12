type Props = {
    onClick1: () => void
    onClick2: () => void
}

export const CheckTweetList = (props: Props) => {
    return(
        <>
        <h3>検証ボタン</h3>
        <button onClick={props.onClick1}>useTweet.tsのtweetList</button>
        <button onClick={props.onClick2}>index.tsxのtweetList</button>
        </>
    )
}