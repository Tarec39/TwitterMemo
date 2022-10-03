import { createRoot } from 'react-dom/client'

import styled from 'styled-components'

/**Hook関数 */
import { useTweet } from './hooks/useTweet'
import { useAddTweetBox } from './hooks/useAddTweetBox'

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

  return(
    <>
    </>
  )
}
