import { createRoot } from 'react-dom/client'
import { useState } from 'react'

/**Hook関数 */
import { useTweet } from './hooks/useTweet'
import { useAddTweetBox } from './hooks/useAddTweetBox'

/**コンポーネント */
import { TweetList } from './components/Output/TweetList'
import { MakeTweet } from './components/TweetBox/MakeTweet'
import { WordCount } from './components/TweetBox/WordCount'

import { Component } from './components/scratch/Component'

const App = () => {
  /**
   * フック関数の定義
   */
  const {tweetList, addTweet,deleteTweet} = useTweet()
  const {textAreaEl, setTextAreaEl, onChangeTextAreaEl, WordNum, isDisabled} = useAddTweetBox()

  
  /**
   * ツイートの追加する処理
   */
  const handleAddTweet = () => {
    if(textAreaEl === ""){return}
    addTweet(textAreaEl!)
    setTextAreaEl("")
  }

  return(
    <>
      <Component />
      
      <MakeTweet 
        value={textAreaEl!}
        isDisabled={isDisabled}
        onChange={onChangeTextAreaEl}
        onClick={handleAddTweet}
      />

      <WordCount
        WordNum={WordNum}
      />

      <TweetList
        tweetList={tweetList}
        deleteTweet={deleteTweet}
      />
    </>
  )
}

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);