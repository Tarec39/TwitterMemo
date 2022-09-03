import { createRoot } from 'react-dom/client'
import { useEffect, useRef, useState } from 'react'

import { useTweet } from './hooks/useTweet'

import { TweetList } from './components/Output/TweetList'
import { MakeTweet } from './components/MakeTweet/MakeTweet'
import { WordCount } from './components/Indicator/WordCount'
import { AddTweet } from './components/thread/AddTweet'

const App = () => {
  const {tweetList, addTweet} = useTweet()
  /**
   * ツイート画面関連の機能
   */

  //入力された文字
  const inputEl = useRef<HTMLTextAreaElement>(null)

  /**ツイートを追加 */
  const handleAddTweet = () => {
    if(inputEl.current?.value === ""){return}
    addTweet(inputEl.current!.value)
    inputEl.current!.value = ""
  }
  /**文字数を表示？ */
  const [WordNum, setWordNum] = useState(Number)

  const countWords = () => {
    if (inputEl.current?.value === "") setWordNum(0);
    setWordNum(inputEl.current!.value.split('').length)
  }
  /**文字数を制限 */
  //140文字超えたらボタンが押せなくなる。
  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  const handleisDisabled = () => {
    if(WordNum > 140) return setIsDisabled(true);
    else{return setIsDisabled(false)}
  }

  useEffect(()=>{
    handleisDisabled()
  },[WordNum])

  /**スレッド機能 */
  const addThread = () =>{
    console.log("スレッドを追加します。")
  }

  return(
    <>
      <MakeTweet inputEl={inputEl} onClick={handleAddTweet} onChange={countWords} isDisabled={isDisabled}></MakeTweet>
      <WordCount WordNum={WordNum}></WordCount>
      <AddTweet onClick={addThread}></AddTweet>
      <TweetList tweetList={tweetList} onClick={addThread}/>
    </>
  )
}

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);