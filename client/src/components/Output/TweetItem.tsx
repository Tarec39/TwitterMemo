import { Tweet } from "../../types/Tweet";
import {AddThread} from "../AddThread"
type props = {
    tweet: Tweet
}
export const TweetItem = (props: props) => {
    return(
        <>
        <p style={{whiteSpace: 'pre-wrap'}}>{props.tweet.text}</p>
        <AddThread />
        </>
    )
}