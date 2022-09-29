import { useState, useEffect } from "react"
import { ulid } from "ulid"

import * as tweetData from "../apis/Tweets"
import { Tweet } from "../types/Tweet"

export const useTweet = () => {
    const [tweetList, setTweetList] = useState<Tweet[]>([])

    useEffect(() => {
        tweetData.getAllTweets().then((tweet) => {
            setTweetList([...tweet.reverse()])
        })
    },[])
    useEffect(()=>{
        console.log(tweetList)
    },[tweetList])

    const addTweet = (title:string, text: string) => {

        const newContent = {
            title: title,
            contents: [{
                id: ulid(),
                text: text
            }]
        }
        
        tweetData.addTweet(newContent).then((addTweet) => {
            console.log(addTweet)
            setTweetList([addTweet, ...tweetList])
        })
    }

    const deleteTweet = (id: string) => {
        tweetData.deleteTweet(id).then((deleteDone) => {
            // const newTweetList = tweetList.filter((item) => item.id !== deleteDone)
            // setTweetList(newTweetList)
        })
    }

    return {tweetList, addTweet, deleteTweet}
}