import { createRoot } from 'react-dom/client'

import ContentEditable from 'react-contenteditable'

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
    html,
    ref,

    setInputEl,
    setHtml,
    setIsVisible,

    onChangeInputEl,
    onInputDivEl,
    handleIsVisible,
    TextareaRows,

    WordsNum,
    isDisabled,
    isVisible
  } = useAddTweetBox()

  
  /**
   * ツイートを追加する処理
   */

  const handleAddTweet = () => {
    if(html === ""){return}
    addTweet(inputEl, html!)
    setHtml("")
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
        html={html}
        onInputDivEl={onInputDivEl}
        textareaRows={TextareaRows}

        //PostButton.tsx
        handlePostTweet={handlePostTweet}
        handleIsDisabled={isDisabled}
        innerRef={ref}
      />
    </>
  )
}

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);