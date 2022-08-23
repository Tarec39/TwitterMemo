import { TweetItem } from "./TweetItem";
import { Tweet } from "../../types/Tweet";

export const TweetList = (tweetList: Tweet[]) => {
    return(
        <>
        {tweetList.length !== 0 && (
            <>
                <ul>
                    {tweetList.map((tweet) => (
                        <li key={tweet.id}>
                            <p>{tweet.text}</p>
                        </li>
                    ))}
                </ul>
            </>
        )}
        </>
    )
}