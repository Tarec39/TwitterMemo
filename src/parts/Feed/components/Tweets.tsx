//type
import { TweetData } from "../../../types/Tweet";
//parts
import { Tweet } from "./Tweet";

type Props = {
    tweetList: TweetData[]|undefined
    handleDelete: (id: string) => void
}

export const Tweets = (props: Props) => {
    return(
        <>
        {props.tweetList?.length !== 0 && (
            <>
            {props.tweetList?.map((tweet, i) => (
                <Tweet tweet={tweet} handleDelete={props.handleDelete} index={i} key={i} />
            ))}
        </>
        )}
        </>
    )
}

