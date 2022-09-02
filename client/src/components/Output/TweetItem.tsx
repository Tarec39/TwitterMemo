import { Tweet } from "../../types/Tweet";

type props = {
    tweet: Tweet
}
export const TweetItem = (props: props) => {
    return(
        <>
        <p>{props.tweet.text}</p>
        </>
    )
}