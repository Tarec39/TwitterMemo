import { createRoot } from 'react-dom/client'

import ContentEditable from 'react-contenteditable'

import {useState, useRef} from 'react'

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

    WordNum,
    isDisabled,
    isVisible
  } = useAddTweetBox()

  
  /**
   * ツイートの追加する処理
   */
  const handleAddTweet = () => {
    if(textAreaEl === ""){return}
    addTweet(inputEl, textAreaEl!)
    setTextAreaEl("")
    setInputEl("")
    setIsVisible(false)
  }

  const ref = useRef<HTMLDivElement>(null)
  const [html, setHtml] = useState('')
  const onInput = (e:React.FormEvent<HTMLDivElement>) => {
    let innerhtml = e.currentTarget.innerHTML
    setHtml(innerhtml)
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
      />

      <ContentEditable
        innerRef={ref}
        html={html}
        onChange={onInput}
      />
    </>
  )
}

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);