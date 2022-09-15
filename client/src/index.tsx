import { createRoot } from 'react-dom/client'

/**Hook関数 */
import { useTweet } from './hooks/useTweet'
import { useAddTweetBox } from './hooks/useAddTweetBox'

/**コンポーネント */
import { TweetList } from './components/Output/TweetList'
import { MakeTweet } from './components/TweetBox/MakeTweet'
import { WordCount } from './components/TweetBox/WordCount'

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

  /**
   * スレッドを追加する処理
   */
  const handleAddThread = () => {
    console.log("仮置き")
  }

  return(
    <>
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
        onClick={handleAddThread}
      />
    </>
  )
}

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);