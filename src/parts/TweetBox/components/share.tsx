//useContext
import { createContext } from "react"
//types
import { TweetData } from "../../../types/Tweet"
//parts
import { Feed } from "../../Feed"
import { DeleteBtn } from "../../Feed/components/DeleteBtn"

type deleteTweet = (id:string)=>void

type props = {
    tweetList: TweetData[]
    deleteTweet: deleteTweet
}

export const TweetListandDelete = createContext<props|undefined>(undefined)

export const Share = (props: props) => {
    const tweetList = props.tweetList ,deleteTweet = props.deleteTweet
    return(
        <>
        <TweetListandDelete.Provider value={{tweetList, deleteTweet}}>
            <Feed/>
        </TweetListandDelete.Provider>
        </>
    )
}