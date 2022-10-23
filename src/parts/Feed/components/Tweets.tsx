//type
import { TweetData } from "../../../types/Tweet";
//parts
import { Tweet } from "./Tweet";

type Props = {
    tweetList: TweetData[]
    handleDelete: () => void
}

export const Tweets = (props: Props) => {
    return(
        <>
        {props.tweetList.length !== 0 && (
        <>
            {props.tweetList.map((tweet, i) => (
                <>
                <Tweet key={i} tweet={tweet} handleDelete={props.handleDelete}></Tweet>
                </>
            ))}
        </>
        )}
        </>
    )
}

