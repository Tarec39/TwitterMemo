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
        })
    },[])

    const test = () => {
        console.log(tweetList)
        return string
    }
    return {tweetList, test}
}