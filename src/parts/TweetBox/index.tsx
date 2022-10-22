import { useTweet } from "../../hooks/useTweet";

//Parts
import { Title } from "./components/Title";
import { Text } from "./components/Text";
import { TweetButton } from "./components/TweetButton";
//Hooks
import { useTitle } from "./hooks/useTweetBox";
import { useText } from "./hooks/useTweetBox";

export const TweetBox = () => {
    const {inputEl, onChangeInput, setInputEl} = useTitle()
    const {textAreaEl, onChangeTextArea, calcRow, setTextAreaEl} = useText()

    const {postTweet} = useTweet()
    const handlePostTweet = () => {
        clearTweetBox()
        postTweet(inputEl, textAreaEl)
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
        />
        </>
    )
}