import { createRoot } from 'react-dom/client'
import { TweetList } from './components/Output/TweetList'
import { useTweet } from './hooks/useTweet'

const App = () => {
  const {tweetList} = useTweet()
  return(
    <>
      {/* <TweetList tweetList={tweetList}/> */}
    </>
  )
}

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);