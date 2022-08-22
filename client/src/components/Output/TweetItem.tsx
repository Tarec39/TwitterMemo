import { Tweet } from "../../types/Tweet";

export const TweetItem = (tweet: Tweet) => {
    return(
        <p>{tweet.text}</p>
    )
}