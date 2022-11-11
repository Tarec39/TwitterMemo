//useContext
import { useContext } from "react"
import { TweetListandDelete } from "../TweetBox/components/share"
//parts
import { Tweets } from "./components/Tweets"

export const Feed = () => {

    const context = useContext(TweetListandDelete)
    const handleDelete = (id:string) => {
        context?.deleteTweet(id)
    }

    return(
        <>
            <Tweets tweetList={context?.tweetList} handleDelete={handleDelete}/>
        </>
    )
}