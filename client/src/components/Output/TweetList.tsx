import { TweetItem } from "./TweetItem";
import { Tweet } from "../../types/Tweet";

type Props = {
    tweetList: Tweet[]
}
export const TweetList = (props: Props) => {
    return(
        <>
        {props.tweetList.length !== 0 && (
            <>
                <ul>
                    {props.tweetList.map((tweet) => (
                        <li key={tweet.id}>
                            <TweetItem tweet={tweet}/>
                        </li>
                    ))}
                </ul>
            </>
        )}
        </>
    )
}