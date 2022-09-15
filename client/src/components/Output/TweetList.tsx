import { TweetItem } from "./TweetItem";
import { Tweet } from "../../types/Tweet";
import { AddThread } from "../AddThread";
import { DeleteTweet } from "../DeleteTweet"
import {FakeMakeTweet} from "../scrach/FakeMakeTweet"

type Props = {
    tweetList: Tweet[]
    deleteTweet: (id:string) => void
    onClick: () => any
    components: string[]
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
                            {/* このへんにコンポーネントをぶち込む処理。 */}
                            {props.components.map((item, i) => (
                                <FakeMakeTweet key={i}/>
                            ))}
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