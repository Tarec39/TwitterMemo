
//common parts
import { ThreadBtn } from "../../components/ThreadBtn";
import { ThreadText } from "../../components/ThreadText";
//Parts
import { Title } from "./components/Title";
import { Text } from "./components/Text";
import { TweetButton } from "./components/TweetButton";
import { WordCountIndicator } from "./components/WordCount";
//Common Hooks
import { useTweet } from "../../hooks/useTweet";
import { useThreadBtn } from "../../hooks/useThread";
//Hooks
import { useTitle } from "./hooks/useTweetBox";
import { useText } from "./hooks/useTweetBox";
import { useCharProcess } from "./hooks/useTweetBox";

export const TweetBox = () => {
    //use Hooks
    const {inputEl, onChangeInput, setInputEl} = useTitle()
    const {textAreaEl, onChangeTextArea, calcRow, setTextAreaEl} = useText()
    const { calcRemainChar } = useCharProcess(textAreaEl)

    //use Common Hooks
    const {postTweet} = useTweet()
    const {array, handleNum, handleDelThread} = useThreadBtn()

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

        <ThreadBtn
            onClick={handleNum}
        />

        <ThreadText 
            value={textAreaEl}
            onChange={onChangeTextArea}
            array={array}
            handleDelThread={handleDelThread}
        />

        <WordCountIndicator WordNum={calcRemainChar()}/>
        </>
    )
}