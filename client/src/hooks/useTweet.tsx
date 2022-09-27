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
    
    const addTweet = (title:string, text: string) => {
        const newTweet = {
            title: title,
            text: text,
            id: ulid()
        }
        
        tweetData.addTweet(newTweet).then((addTweet) => {
            console.log(addTweet)
            setTweetList([addTweet, ...tweetList])
        })
    }

    const deleteTweet = (id: string) => {
        tweetData.deleteTweet(id).then((deleteDone) => {
            const newTweetList = tweetList.filter((item) => item.id !== deleteDone)
            setTweetList(newTweetList)
        })
    }

    return {tweetList, addTweet, deleteTweet}
}