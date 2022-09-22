import { Tweet } from "../../types/Tweet";
type props = {
    tweet: Tweet
}

export const TweetItem = (props: props) => {
    return(
        <>
        <p id="test" style={{whiteSpace: 'pre-wrap'}}>{props.tweet.text}</p>
        </>
    )
}
