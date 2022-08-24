import { createRoot } from 'react-dom/client'

import { TweetList } from './components/Output/TweetList'
import { useTweet } from './hooks/useTweet'

import { TestType } from './components/Output/TestType'

const App = () => {
  const {test, tweetList} = useTweet()
  return(
    <>
      <TweetList tweetList={tweetList}/>
      <TestType onClick={test}/>
    </>
  )
}

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);