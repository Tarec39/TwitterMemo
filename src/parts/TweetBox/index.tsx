
import { ContentState, EditorState} from "draft-js";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

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
    const {titleEditorState, setTitleEditorState} = useTitle()
    const {textEditorState, setTextEditorState} = useText()

    const text = textEditorState.getCurrentContent().getPlainText()
    const { countChar, countMaxChar } = useCharCounter(text)
    const {styles, width} = useMeter(countChar().count)
    //use Common Hooks
    const {postTweet, tweetList, deleteTweet} = useTweet()

    const handlePostTweet = () => {
        const title = titleEditorState.getCurrentContent().getPlainText()
        const text = textEditorState.getCurrentContent().getPlainText()
        postTweet(title, text)
        clearTweetBox()
    }

    const clearTweetBox = () => {
        const clearTitle = EditorState.push(titleEditorState, ContentState.createFromText(''), 'remove-range')
        const clearText = EditorState.push(textEditorState, ContentState.createFromText(''), 'remove-range')
        setTitleEditorState(clearTitle)
        setTextEditorState(clearText)
    }

    const handleNavigateThread = () => {
        navigate('/compose/tweet')
    }

    const handleThreadable = (text:string) => {
        let a
        (text.length===0) ?  a=false:a=true
        console.log(a)
        return a 
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
        <A>

        <WordCountIndicator
            maxChar={countMaxChar()}
            char={width()}
            styles={styles()}
        />
        <Partition></Partition>
        <ThreadBtn
            onClick={handleNavigateThread}
            isThreadable={handleThreadable(text)}
        />
        <TweetButton 
            handlePostTweet={handlePostTweet}
            num={countChar().count}
            text={textEditorState.getCurrentContent().getPlainText()}
        />
        </A>



        <Share tweetList={tweetList} deleteTweet={deleteTweet}/>
        </>
    )
}

const A = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    // position: relative;
`
const Partition = styled.span`

`
