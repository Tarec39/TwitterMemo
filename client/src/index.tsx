import { createRoot } from 'react-dom/client'
import { useRef } from 'react'

import { useTweet } from './hooks/useTweet'

import { TweetList } from './components/Output/TweetList'
import { MakeTweet } from './components/MakeTweet/MakeTweet'


const App = () => {
  const {tweetList, addTweet} = useTweet()

  const inputEl = useRef<HTMLTextAreaElement>(null)

  const handleAddTweet = () => {
    if(inputEl.current?.value === ""){return}
    addTweet(inputEl.current!.value)
    inputEl.current!.value = ""
  }
  
  return(
    <>
      <MakeTweet inputEl={inputEl} onClick={handleAddTweet}></MakeTweet>
      <TweetList tweetList={tweetList}/>
    </>
  )
}

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);