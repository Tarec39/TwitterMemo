import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import styled from 'styled-components'
/**Hook関数 */
import { useTweet } from './hooks/useTweet'
import { useAddTweetBox } from './hooks/useAddTweetBox'

/**コンポーネント */
import { TweetList } from './components/Output/TweetList'
import { PostTweet } from './components/TweetBox/PostTweet'
import { WordCount } from './components/TweetBox/WordCount'

import { Posts } from './components/scratch/ツイート済み'

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

  return(
    <>
      <Container>
        <span></span>
        <div className="frame">
          <PostTweet 
            value={textAreaEl!}
            isDisabled={isDisabled}
            onChange={onChangeTextAreaEl}
            onClick={handleAddTweet}
            />
  
          <WordCount
            WordNum={WordNum}
            />
        </div>
        <span></span>
      </Container>

      <Posts></Posts>
      <TweetList
        tweetList={tweetList}
        deleteTweet={deleteTweet}
      />
    </>
  )
}

const Container = styled.div`
display: flex;
max-width: 1300px;
margin-left: auto;
margin-right: auto;
padding: 0 10px;
  > .frame {
    flex: 0.5;
    border-right: 1px solid #e6ecf0;
    min-width: fit-content;
    border-bottom: 8px solid #e6ecf0;
  }

  > span:first-child {
    flex: 0.2;
    border-right: 1px solid #e6ecf0;
    min-width: 250px;
    margin-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }

  > span:last-child {
    flex: 0.3;
  }
`;



const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);