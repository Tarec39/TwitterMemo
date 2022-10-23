import axios from "axios";
import { TweetData } from "../types/Tweet"

const tweetDataUrl = "http://localhost:3100/tweets"

export const POST = async (tweet: TweetData) => {
    const res = await axios.post(tweetDataUrl, tweet)
    return res.data
}

export const getAllTweets = async () => {
    const res =  await axios.get(tweetDataUrl)
    return res.data
}

export const updateTweet = async (id: string, tweet: TweetData) => {
    const res = await axios.put(`${tweetDataUrl}/${id}`, tweet)
    return res.data
}
export const deleteTweet = async (id: string) => {
    await axios.delete(`${tweetDataUrl}/${id}`)
    return id
}