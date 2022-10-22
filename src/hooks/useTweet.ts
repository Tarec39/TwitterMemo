import { useState, useEffect } from "react"
import { ulid } from "ulid"

import * as tweetData from "./TweetApi"
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
    }, [])

    const postTweet = (title:string, text: string) => {

        const newTweet = {
            title: title,
            contents: [{
                id: ulid(),
                text: text
            }]
        }
        
        tweetData.POST(newTweet).then((postTweet) => {
            setTweetList([postTweet, ...tweetList])
        })
    }

    const deleteTweet = (id: string) => {
        tweetData.deleteTweet(id).then((deleteDone) => {
            // const newTweetList = tweetList.filter((item) => item.id !== deleteDone)
            // setTweetList(newTweetList)
        })
    }

    return {tweetList, postTweet, deleteTweet}
}