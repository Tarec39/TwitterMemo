
import { ContentState, EditorState} from "draft-js";
import { useNavigate } from "react-router-dom";
//useContext
import { Share } from "./components/share";
//Common Parts
import { ThreadBtn } from "../../components/ThreadBtn";
//Parts
import { Title } from "./components/Title";
import { Text } from "./components/Text";
import { TweetButton } from "./components/TweetButton";
import { WordCountIndicator } from "./components/WordCount";
//Common Hooks
import { useTweet } from "../../hooks/useTweet";
//Hooks
import { useMeter, useTitle } from "./hooks/useTweetBox";
import { useText } from "./hooks/useTweetBox";
import { useCharCounter } from "./hooks/useTweetBox";

export const TweetBox = () => {
    //use Router
    const navigate = useNavigate()
    //use Hooks
    const {inputEl, onChangeInput, clearInputEl} = useTitle()
    const {textEditorState, setTextEditorState} = useText()

    const text = textEditorState.getCurrentContent().getPlainText()
    const { countChar, countMaxChar } = useCharCounter(text)
    const {styles, width} = useMeter(countChar().count)
    //use Common Hooks
    const {postTweet, tweetList, deleteTweet} = useTweet()
    const handlePostTweet = () => {
        const title = inputEl
        const text = textEditorState.getCurrentContent().getPlainText()
        postTweet(title, text)
        clearTweetBox()
    }

    const clearTweetBox = () => {
        clearInputEl()
        const clearText = EditorState.push(textEditorState, ContentState.createFromText(''), 'remove-range')
        setTextEditorState(clearText)
    }

    const handleNavigate = () => {
        navigate('/compose/tweet')
    }
    return(
        <>
        <Title
            inputEl={inputEl}
            onChange={onChangeInput}
        />

        <Text
            editorState={textEditorState}
            setEditorState={setTextEditorState}
        />

        <TweetButton 
            handlePostTweet={handlePostTweet}
            num={countChar().count}
            text={textEditorState.getCurrentContent().getPlainText()}
        />

        <ThreadBtn
            onClick={handleNavigate}
        />

        {/* <ThreadText 
            value={textAreaEl}
            onChange={onChangeTextArea}
            array={array}
            handleDelThread={handleDelThread}
        /> */}

        <WordCountIndicator
            maxChar={countMaxChar()}
            char={width()}
            styles={styles()}
        />
        <Share tweetList={tweetList} deleteTweet={deleteTweet}/>
        </>
    )
}