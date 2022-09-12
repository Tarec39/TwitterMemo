/* eslint-disable react-hooks/exhaustive-deps */
import { createRoot } from 'react-dom/client'
import React, { useEffect, useState } from 'react'

import { useTweet } from './hooks/useTweet'
import { useAddTweetBox } from './hooks/useAddTweetBox'

import { CheckTweetList } from './components/scrach/CheckTweetList'

import { TweetList } from './components/Output/TweetList'
import { MakeTweet } from './components/MakeTweet'
import { WordCount } from './components/WordCount'
import { AddTweet } from './components/AddTweet'

const App = () => {


  /**
   * 何かの値
   */
  const {tweetList, addTweet,deleteTweet, showTweetList} = useTweet()

    /**
   * 検証用
   */
  const showTweetList2 = () => {
    console.log(tweetList)
  }

  /**
   * ツイート画面関連の機能
   */
  const {textAreaEl, setTextAreaEl, onChangeTextAreaEl} = useAddTweetBox()

  
  const handleAddTweet = () => {
    if(textAreaEl === ""){return}
    addTweet(textAreaEl!)
    setTextAreaEl("")
  }

  /**スレッド機能 */
  const addThread = () =>{
    console.log("追加します。")
  }

  return(
    <>
      <MakeTweet 
        value={textAreaEl!}
        onChange={onChangeTextAreaEl}
        onClick={handleAddTweet}
      />

      <CheckTweetList
        onClick1={showTweetList}
        onClick2={showTweetList2}
      />

      <TweetList
        tweetList={tweetList}
        deleteTweet={deleteTweet}
        // onClick={addThread}
      />


    </>
  )
}

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);