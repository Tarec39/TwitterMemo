//common hooks
import { useTweet } from "../../hooks/useTweet"

//hooks

//parts
import { Tweets } from "./components/Tweets"

export const Feed = () => {
    const {tweetList} = useTweet()

    const handleDelete = () => {
        //引数を渡す
        //どんな引数なのか、要件等
    }
    return(
        <Tweets tweetList={tweetList} handleDelete={handleDelete}/>
    )
}