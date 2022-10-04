import { createRoot } from 'react-dom/client'

/**Hook関数 */
import { useTweet } from './hooks/useTweet'
import { useAddTweetBox } from './hooks/useTweetBox'

/**コンポーネント */
import { PostTweet } from './components/TweetBox/PostTweet'

const App = () => {
  /**
   * フック関数の定義
   */
  const {tweetList, addTweet,deleteTweet} = useTweet()
  const {
    inputEl,
    textAreaEl,

    setInputEl,
    setTextAreaEl,
    setIsVisible,

    onChangeInputEl,
    onChangeTextAreaEl,
    handleIsVisible,
    TextareaRows,

    WordsNum,
    isDisabled,
    isVisible
  } = useAddTweetBox()

  
  /**
   * ツイートを追加する処理
   */
  const handlePostTweet = () => {
    if(textAreaEl === ""){return}
    addTweet(inputEl, textAreaEl!)
    setTextAreaEl("")
    setInputEl("")
    setIsVisible(false)
  }

  return(
    <>
      <PostTweet 

        // Title.tsx
        inputEl={inputEl!}
        onChangeInputEl={onChangeInputEl}

        //Text.tsx
        textareaEl={textAreaEl}
        onChangeTextareaEl={onChangeTextAreaEl}
        textareaRows={TextareaRows}

        //PostButton.tsx
        handlePostTweet={handlePostTweet}
        handleIsDisabled={isDisabled}
      />
    </>
  )
}

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);