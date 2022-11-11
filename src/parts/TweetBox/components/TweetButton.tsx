type props = {
    handlePostTweet: ()=>void
    text: string
    num: number
}

export const TweetButton = (props:props) => {
    const isDisabled = (props.text !=='' && props.num <= 281 ) ? false :true;
    return(
        <div>

        <button 
        onClick={props.handlePostTweet}
        disabled={isDisabled}
        >ツイートする</button>
        </div>
    )
}