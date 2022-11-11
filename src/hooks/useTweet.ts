import { useState, useEffect } from "react"
import { ulid } from "ulid"

import * as tweetData from "./TweetApi"
import { TweetData } from "../types/Tweet"

export const useTweet = () => {
    const [tweetList, setTweetList] = useState<TweetData[]>([])

    useEffect(() => {
        tweetData.getAllTweets().then((tweet) => {
            setTweetList([...tweet.reverse()])
        })
    },[])

    const postTweet = (title:string, text: string) => {

        const newTweet = {
            title: title,
            id: ulid(),
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
        //全体削除
        //スレッドを一部消すような、ツイート単体のIDではない。
        tweetData.deleteTweet(id).then((deletedTweetId) => {
            const newTweetList = tweetList.filter((item) => item.id !== deletedTweetId)
            setTweetList(newTweetList)
        })
    }

    return {tweetList, postTweet, deleteTweet}
}