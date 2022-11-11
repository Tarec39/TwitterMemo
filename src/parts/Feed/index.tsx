import { useContext} from "react"
//common hooks
import { useTweet } from '../../hooks/useTweet'
//hooks

//parts
import { TweetList } from "../TweetBox/components/share"

import { Tweets } from "./components/Tweets"
import { TweetData } from "../../types/Tweet"
// import { deleteTweet } from "../../hooks/TweetApi"

export const Feed = () => {

    const tweetList = useContext(TweetList)
    const deleteTweet = useContext(TweetList)
    // const {deleteTweet} = useTweet()
    const handleDelete = (id:string) => {
        console.log('aa')
        tweetList?.deleteTweet(id)
    }

    return(
        <>
            <Tweets tweetList={tweetList?.tweetList} handleDelete={handleDelete}/>
        </>
    )
}