import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import styled from 'styled-components'
/**Hook関数 */
import { useTweet } from './hooks/useTweet'
import { useAddTweetBox } from './hooks/useAddTweetBox'

/**コンポーネント */
import { Posts } from './components/Output/TweetList'
import { PostTweet } from './components/TweetBox/PostTweet'
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

  return(
    <>
      <Container>
        <span className="sidebar"></span>

        <div className="feed">
          
          <TweetBox>
            <PostTweet 
              value={textAreaEl!}
              isDisabled={isDisabled}
              onChange={onChangeTextAreaEl}
              onClick={handleAddTweet}
            />
            <WordCount
              WordNum={WordNum}
            />
          </TweetBox>

          <Posts
            tweetList={tweetList}
            deleteTweet={deleteTweet}
          />
        </div>
      </Container>
    </>
  )
}


const TweetBox = styled.div`
  padding-bottom: 10px;
  padding-right: 10px;
`;
const Container = styled.div`
display: flex;
height: 100vh;
max-width: 1300px;
margin-left: auto;
margin-right: auto;
padding: 0 10px;

.sidebar {
  flex: 0.2;
  // border-right: 1px solid #e6ecf0;
  min-width: 250px;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px dotted #000;
}

.feed {
  flex: 0.5;
  min-width: fit-content!;
  border: 1px dotted #000;
  overflow-y: scroll;

  // border-right: 1px solid #e6ecf0;
  // border-bottom: 8px solid #e6ecf0;
}
> span:last-child {
  flex: 0.3;
}
`;



const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);