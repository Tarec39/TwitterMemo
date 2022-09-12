type Props = {
    onClick1: () => void
    onClick2: () => void
}

export const CheckTweetList = (props: Props) => {
    return(
        <>
        <button onClick={props.onClick1}>useTweet.tsのtweetList</button>
        <button onClick={props.onClick2}>index.tsxのtweetList</button>
        </>
    )
}