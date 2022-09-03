import { TweetItem } from "./TweetItem";
import { Tweet } from "../../types/Tweet";
<<<<<<< HEAD
import {AddTweet} from "../thread/AddTweet"

type Props = {
    tweetList: Tweet[]
    onClick: () => void
=======
import {DeleteTweet} from "../DeleteTweet"

type Props = {
    tweetList: Tweet[]
    deleteTweet: (id:string) => void
>>>>>>> 削除機能_#13
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
<<<<<<< HEAD
                            <AddTweet onClick={props.onClick}></AddTweet>
=======
                            <DeleteTweet tweet={tweet} deleteTweet={props.deleteTweet}></DeleteTweet>
>>>>>>> 削除機能_#13
                        </li>
                    ))}
                </ul>
            </>
        )}
        </>
    )
}