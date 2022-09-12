/* eslint-disable react-hooks/exhaustive-deps */
import { createRoot } from 'react-dom/client'
import React, { useEffect, useState } from 'react'

import { useTweet } from './hooks/useTweet'
import { useAddTweetBox } from './hooks/useAddTweetBox'

import { TweetList } from './components/Output/TweetList'
import { MakeTweet } from './components/MakeTweet'
import { WordCount } from './components/WordCount'
import { AddTweet } from './components/AddTweet'

const App = () => {

  const {tweetList, deleteTweet} = useTweet()
  /**
   * ツイート画面関連の機能
   */
  const {textAreaEl, onChangeTextAreaEl, handleAddTweet} = useAddTweetBox()


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

      <TweetList tweetList={tweetList} deleteTweet={deleteTweet} onClick={addThread}/>
    </>
  )
}

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);