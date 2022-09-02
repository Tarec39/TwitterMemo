import { Tweet } from "../../types/Tweet";

type props = {
    tweet: Tweet
}
export const TweetItem = (props: props) => {
    return(
        <>
        <p style={{whiteSpace: 'pre-wrap'}}>{props.tweet.text}</p>
        </>
    )
}