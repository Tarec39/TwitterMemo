
import { ContentState, EditorState} from "draft-js";
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
    const {titleEditorState, setTitleEditorState} = useTitle()
    const {textEditorState, setTextEditorState} = useText()
    // const { calcRemainChar } = useCharProcess(textAreaEl)

    //use Common Hooks
    const {postTweet} = useTweet()
    const {array, handleNum, handleDelThread} = useThreadBtn()

    const handlePostTweet = () => {
        const title = titleEditorState.getCurrentContent().getPlainText()
        const text = textEditorState.getCurrentContent().getPlainText()
        postTweet(title, text)
        clearTweetBox()
    }

    const clearTweetBox = () => {
        const cleatTitle = EditorState.push(titleEditorState, ContentState.createFromText(''), 'remove-range')
        const clearText = EditorState.push(textEditorState, ContentState.createFromText(''), 'remove-range')
        setTitleEditorState(cleatTitle)
        setTextEditorState(clearText)
    }

    return(
        <>
        <Title 
            editorState={titleEditorState}
            setEditorState={setTitleEditorState}
        />

        <Text
            editorState={textEditorState}
            setEditorState={setTextEditorState}
        />

        <TweetButton 
            onClick={handlePostTweet}
            // WordNum={calcRemainChar()}
            // value={textAreaEl}
        />

        {/* <ThreadBtn
            onClick={handleNum}
        /> */}

        {/* <ThreadText 
            value={textAreaEl}
            onChange={onChangeTextArea}
            array={array}
            handleDelThread={handleDelThread}
        /> */}

        {/* <WordCountIndicator WordNum={calcRemainChar()}/> */}
        </>
    )
}