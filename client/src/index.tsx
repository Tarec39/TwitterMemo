import { createRoot } from 'react-dom/client'

/**Hook関数 */
import { useTweet } from './hooks/useTweet'
import { useAddTweetBox } from './hooks/useAddTweetBox'

/**コンポーネント */
import { TweetList } from './components/Output/TweetList'
import { MakeTweet } from './components/MakeTweet'


const App = () => {
  /**
   * フック関数の定義
   */
  const {tweetList, addTweet,deleteTweet} = useTweet()
  const {textAreaEl, setTextAreaEl, onChangeTextAreaEl} = useAddTweetBox()

  
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
      <MakeTweet 
        value={textAreaEl!}
        onChange={onChangeTextAreaEl}
        onClick={handleAddTweet}
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