import { TweetItem } from "./TweetItem";
import { Tweet } from "../../types/Tweet";
import { AddThread } from "../AddThread";
import { DeleteTweet } from "../DeleteTweet"

type Props = {
    tweetList: Tweet[]
    deleteTweet: (id:string) => void
    onClick: () => any
}
export const TweetList = (props: Props) => {
    return(
        <>
        <h2>リストの出力</h2>
        {props.tweetList.length !== 0 && (
            <>
                <ul>
                    {props.tweetList.map((tweet) => (
                        <li key={tweet.id}>
                            <TweetItem tweet={tweet}/>
                            {/* <AddTweet onClick={props.onClick}></AddTweet> */}
                            <AddThread onClick={props.onClick}/>
                            <DeleteTweet tweet={tweet} deleteTweet={props.deleteTweet}></DeleteTweet>
                        </li>
                    ))}
                </ul>
            </>
        )}
        </>
    )
}