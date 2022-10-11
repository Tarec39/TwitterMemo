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
    show,

    setInputEl,
    setTextAreaEl,
    setIsVisible,
    setShow,

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

  
  const showInherit = () => {
    console.log('onFocus')
    setShow(true)
  }
  const showNone = () => {
    if(inputEl!=="")return;
    if(textAreaEl!=="")return;
    console.log('onBlur')
    setShow(false)
  }



  return(
    <>
      <PostTweet 
        //TweetBox
        onFocus={showInherit}
        onBlur={showNone}

        // Title.tsx
        inputEl={inputEl!}
        onChangeInputEl={onChangeInputEl}

        //Text.tsx
        textareaEl={textAreaEl}
        onChangeTextareaEl={onChangeTextAreaEl}
        textareaRows={TextareaRows}
        show={show}

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