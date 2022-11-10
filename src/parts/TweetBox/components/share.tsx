import { createContext } from "react"
import { TweetData } from "../../../types/Tweet"
import { Feed } from "../../Feed"


type props = {
    tweetList: TweetData[]
}

export const TweetList = createContext<TweetData[]>([])

export const Share = (props: props) => {
    return(
        <TweetList.Provider value={props.tweetList}>
            <Feed/>
        </TweetList.Provider>
    )
}