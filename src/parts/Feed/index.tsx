import { useContext} from "react"
//common hooks
import { useTweet } from '../../hooks/useTweet'
//hooks

//parts
import { TweetList } from "../TweetBox/components/share"

import { Tweets } from "./components/Tweets"
import { TweetData } from "../../types/Tweet"

export const Feed = () => {

    const tweetList = useContext(TweetList)
    const handleDelete = (id:string) => {
        tweetList?.deleteTweet(id)
    }

    return(
        <>
            <Tweets tweetList={tweetList?.tweetList} handleDelete={handleDelete}/>
        </>
    )
}