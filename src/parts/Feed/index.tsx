//common hooks
import { useTweet } from "../../hooks/useTweet"

//hooks

//components
import { Posts } from "./components/Posts"

export const Feed = () => {
    const {tweetList} = useTweet()

    return(
        <Posts tweetList={tweetList}/>
    )
}