import { TweetItem } from "./TweetItem";
import { Tweet } from "../../types/Tweet";
import {AddTweet} from "../thread/AddTweet"

type Props = {
    tweetList: Tweet[]
    onClick: () => void
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
                            <AddTweet onClick={props.onClick}></AddTweet>
                        </li>
                    ))}
                </ul>
            </>
        )}
        </>
    )
}