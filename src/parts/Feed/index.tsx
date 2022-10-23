//common hooks
import { useTweet } from "../../hooks/useTweet"

//hooks

//components
import { Tweets } from "./components/Tweets"

export const Feed = () => {
    const {tweetList} = useTweet()

    return(
        <Tweets tweetList={tweetList}/>
    )
}