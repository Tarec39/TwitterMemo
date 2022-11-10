//common hooks
import { useContext} from "react"
import { TweetList } from "../TweetBox/components/share"
//hooks

//parts
import { Tweets } from "./components/Tweets"
import { TweetData } from "../../types/Tweet"

export const Feed = () => {
    const tweetList = useContext<TweetData[]>(TweetList)

    const handleDelete = () => {
        //引数を渡す
        //どんな引数なのか、要件等
    }

    return(
        <>
            <Tweets tweetList={tweetList} handleDelete={handleDelete}/>
        </>
    )
}