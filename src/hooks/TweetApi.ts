import axios from "axios";
import { Tweet } from "../types/Tweet"

const tweetDataUrl = "http://localhost:3100/tweets"

//Tweetの作成（未対応）
export const POST = async (tweet: Tweet) => {
    const res = await axios.post(tweetDataUrl, tweet)
    return res.data
}

//Tweetの取得
export const getAllTweets = async () => {
    const res =  await axios.get(tweetDataUrl)
    return res.data
}

//Tweetの更新(新品未使用)
export const updateTweet = async (id: string, tweet: Tweet) => {
    const res = await axios.put(`${tweetDataUrl}/${id}`, tweet)
    return res.data
}

//Tweetの削除（未対応）
export const deleteTweet = async (id: string) => {
    await axios.delete(`${tweetDataUrl}/${id}`)
    return id
}