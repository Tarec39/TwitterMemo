import { createContext } from "react"
import { TweetData } from "../../../types/Tweet"
import { Feed } from "../../Feed"

type deleteTweet = (id:string)=>void

type props = {
    tweetList: TweetData[]
    deleteTweet: deleteTweet
}

export const TweetList = createContext<props|undefined>(undefined)

export const Share = (props: props) => {
    const tweetList = props.tweetList
    const deleteTweet = props.deleteTweet
    return(
        <>
        <TweetList.Provider value={{tweetList, deleteTweet}}>
            <Feed/>
        </TweetList.Provider>
        </>
    )
}