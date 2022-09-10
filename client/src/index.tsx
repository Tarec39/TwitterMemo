/* eslint-disable react-hooks/exhaustive-deps */
import { createRoot } from 'react-dom/client'
import { useEffect, useRef, useState } from 'react'

import { useTweet } from './hooks/useTweet'

import { TweetList } from './components/Output/TweetList'
import { MakeTweet } from './components/MakeTweet'
import { WordCount } from './components/WordCount'
import { AddTweet } from './components/AddTweet'

const App = () => {
  const {tweetList, addTweet, deleteTweet} = useTweet()
  /**
   * ツイート画面関連の機能
   */

   const inputEl = useRef<HTMLTextAreaElement>(null)

   const handleAddTweet = () => {
    if(inputEl.current?.value === ""){return}
    addTweet(inputEl.current!.value)
    inputEl.current!.value = ""
  }

  /**スレッド機能 */
  const addThread = () =>{
    console.log("追加します。")
  }

  return(
    <>
      <MakeTweet inputEl={inputEl} onClick={handleAddTweet}></MakeTweet>
      {/* <WordCount WordNum={WordNum}></WordCount> */}
      {/* <AddTweet onClick={addThread}></AddTweet> */}
      <TweetList tweetList={tweetList} deleteTweet={deleteTweet} onClick={addThread}/>
    </>
  )
}

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);