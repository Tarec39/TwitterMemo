//type
import { TweetData } from "../../../types/Tweet";
//component
import { Tweet } from "./Tweet";

type Props = {
    tweetList: TweetData[]
    // deleteTweet: (id:string) => void
}

export const Tweets = (props: Props) => {
    return(
        <>
        {props.tweetList.length !== 0 && (
        <>
            {props.tweetList.map((tweet, i) => (
                <>
                <Tweet key={i} tweet={tweet}></Tweet>
                </>
            ))}
        </>
        )}
        </>
    )
}

