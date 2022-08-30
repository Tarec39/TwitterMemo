import { createRoot } from 'react-dom/client'
import { useRef, useState } from 'react'

import { useTweet } from './hooks/useTweet'

import { TweetList } from './components/Output/TweetList'
import { MakeTweet } from './components/MakeTweet/MakeTweet'
import { WordCount } from './components/Indicator/WordCount'

const App = () => {
  const {tweetList, addTweet} = useTweet()

  const inputEl = useRef<HTMLTextAreaElement>(null)

  const handleAddTweet = () => {
    if(inputEl.current?.value === ""){return}
    addTweet(inputEl.current!.value)
    inputEl.current!.value = ""
  }

  const [WordNum, setWordNum] = useState(Number)

  const countWords = () => {
    if (inputEl.current?.value === "") setWordNum(0);
    setWordNum(inputEl.current!.value.split('').length)
  }

  return(
    <>
      <MakeTweet inputEl={inputEl} onClick={handleAddTweet} onChange={countWords}></MakeTweet>
      <WordCount WordNum={WordNum}></WordCount>
      <TweetList tweetList={tweetList}/>
    </>
  )
}

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);