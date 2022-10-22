type props = {
    onClick: ()=>void
    // isDisabled: boolean
}

export const TweetButton = (props:props) => {
    return(
        <button 
        onClick={props.onClick}
        /**特定の文字数を超えたら入力できなくする。 */
        // disabled={props.isDisabled}
        // disabled={280bytes超えたらTrue、そうでないならFalse}
        >ツイートする</button>
    )
}