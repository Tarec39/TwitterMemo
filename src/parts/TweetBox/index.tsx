import { useTweet } from "../../hooks/useTweet";

//common parts
import { ThreadBtn } from "../../components/ThreadBtn";

//Parts
import { Title } from "./components/Title";
import { Text } from "./components/Text";
import { TweetButton } from "./components/TweetButton";
import { WordCountIndicator } from "./components/WordCount";
//Hooks
import { useTitle } from "./hooks/useTweetBox";
import { useText } from "./hooks/useTweetBox";
import { useCharProcess } from "./hooks/useTweetBox";

export const TweetBox = () => {
    const {inputEl, onChangeInput, setInputEl} = useTitle()
    const {textAreaEl, onChangeTextArea, calcRow, setTextAreaEl} = useText()
    const { calcRemainChar } = useCharProcess(textAreaEl)

    const {postTweet} = useTweet()

    const handlePostTweet = () => {
        postTweet(inputEl, textAreaEl)
        clearTweetBox()
    }

    const clearTweetBox = () => {
        setInputEl('')
        setTextAreaEl('')
    }

    return(
        <>
        <Title 
            value={inputEl}
            onChange={onChangeInput}
            />

        <Text
            value={textAreaEl}
            onChange={onChangeTextArea}
            rows={calcRow}
        />

        <TweetButton 
            onClick={handlePostTweet}
            WordNum={calcRemainChar()}
            value={textAreaEl}

        />

        <ThreadBtn />

        <WordCountIndicator WordNum={calcRemainChar()}/>
        </>
    )
}