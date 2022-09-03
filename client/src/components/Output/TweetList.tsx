import { TweetItem } from "./TweetItem";
import { Tweet } from "../../types/Tweet";
import {DeleteTweet} from "../DeleteTweet"

type Props = {
    tweetList: Tweet[]
    deleteTweet: (id:string) => void
}
export const TweetList = (props: Props) => {
    return(
        <>
        <h2>ツイートの出力</h2>
        {props.tweetList.length !== 0 && (
            <>
                <ul>
                    {props.tweetList.map((tweet) => (
                        <li key={tweet.id}>
                            <TweetItem tweet={tweet}/>
                            <DeleteTweet tweet={tweet} deleteTweet={props.deleteTweet}></DeleteTweet>
                        </li>
                    ))}
                </ul>
            </>
        )}
        </>
    )
}