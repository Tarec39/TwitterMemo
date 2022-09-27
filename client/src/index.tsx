import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import styled from 'styled-components'
/**Hook関数 */
import { useTweet } from './hooks/useTweet'
import { useAddTweetBox } from './hooks/useAddTweetBox'

/**コンポーネント */
import { Posts } from './components/Output/Posts'
import { PostTweet } from './components/TweetBox/PostTweet'
import { WordCount } from './components/TweetBox/WordCount'

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
      <Header><h2>青鳥</h2></Header>
      <Container>
        <Sidebar></Sidebar>
        <Feed>
          {/* <TweetBox>
            <PostTweet 
              inputEl={inputEl!}
              textAreaEl={textAreaEl!}
              isDisabled={isDisabled}
              visible={isVisible}
              onInputElChange={onChangeInputEl}
              onTextAreaChange={onChangeTextAreaEl}
              onClick={handleAddTweet}
              handleIsVisible={handleIsVisible}
              />
          </TweetBox> */}
            {/* <WordCount
              WordNum={WordNum}
            /> */}
          <Posts
            tweetList={tweetList}
            deleteTweet={deleteTweet}
            />
        </Feed>
      </Container>
    </>
  )
}

const Header = styled.header`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
  border: 1px solid #e6ecf0;
  padding: 15px 20px;
`;
const Container = styled.div`
  display: flex;
  // max-width: 1300px;
  padding: 0 10px;
  height: 100vh;
`;
const Sidebar = styled.div`
  flex: 0.2;
  border-right: 1px solid #e6ecf0;
  min-width: 250px;
  // margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;
const Feed = styled.div`

  width: 100%;
  min-width: fit-content!;
  overflow-y:scroll
  -ms-overflow-style: none;
`
const TweetBox = styled.div`
  width: 600px;
  padding-bottom: 10px;
  padding-right: 10px;
  border-bottom: 8px solid #e6ecf0;
  margin: auto;
`;
const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);