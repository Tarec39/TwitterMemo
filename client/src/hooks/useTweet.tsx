import React, { useState, useEffect } from "react"
import { ulid } from "ulid"

import * as tweetData from "../apis/Tweets"
import { Tweet } from "../types/Tweet"

export const useTweet = () => {
    const [tweetList, setTweetList] = useState<Tweet[]>([])

    useEffect(() => {
        tweetData.getAllTweets().then((tweet) => {
            console.log(...tweet)
            setTweetList([...tweet])
            console.log(tweetList)
        })
    },[])

    const addTweet = (text: string) => {
        const newTweet = {
            id: ulid(),
            text: text
        }

        tweetData.addTweet(newTweet).then((addTweet) => {
            console.log(addTweet)
            setTweetList([addTweet, ...tweetList])
        })
    }
    return {tweetList, addTweet}
}