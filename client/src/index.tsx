/* eslint-disable react-hooks/exhaustive-deps */
import { createRoot } from 'react-dom/client'
import React, { useEffect, useState } from 'react'

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


  const [message, setMessage] = useState<string>()

  const onChangeMessage = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
    // console.log(event.target.value)
    setMessage(event.target.value)
  }

  const handleAddTweet = () => {
    if(message === ""){return}
    addTweet(message!)
    setMessage("")
  }

  /**スレッド機能 */
  const addThread = () =>{
    console.log("追加します。")
  }

  return(
    <>
      <MakeTweet 
        message={message!}
        onChange={onChangeMessage}
        onClick={handleAddTweet}
      />

      <TweetList tweetList={tweetList} deleteTweet={deleteTweet} onClick={addThread}/>
    </>
  )
}

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);