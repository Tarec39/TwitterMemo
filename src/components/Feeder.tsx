//Nanka
import styled from 'styled-components'

//Parts
import { TweetBox } from "./TweetBox/TweetBox";
import { Feed } from "./Feed/Feed";

//Nantoka Hooks
import { ContentState, EditorState} from "draft-js";
import { useNavigate } from "react-router-dom";

//Common Hooks
import { useTweet } from "../hooks/useTweet";

//Hooks
import { useMeter, useTitle } from "../hooks/useTweetBox";
import { useText } from "../hooks/useTweetBox";
import { useCharCounter } from "../hooks/useTweetBox";

export const Feeder = () => {
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

        const handleDelete = (id:string) => {
            deleteTweet(id)
        }

    return(
        <>
        <_Feeder className="Feeder">
            <_TweetBox className="TweetBox">
            <TweetBox
                titleEditorState={titleEditorState}
                setTitleEditorState={setTitleEditorState}
                textEditorState={textEditorState}
                setTextEditorState={setTextEditorState}
                text={text}
                countMaxChar={countMaxChar}
                width={width}
                styles={styles}
                handlePostTweet={handlePostTweet}
                countChar={countChar}
                handleNavigateThread={handleNavigateThread}
                handleThreadable={handleThreadable}
                />
            </_TweetBox>

            <_Feed className="Feed">


            <Feed
                tweetList={tweetList}
                handleDelete={handleDelete}
                />
            </_Feed>

        </_Feeder>
        </>
    )
}


const _Feeder = styled.div`
  width: 100%;
  min-width: fit-content!;
  overflow-y:scroll
  -ms-overflow-style: none;
`

const _TweetBox = styled.div`
  width: 500px;
  border: 1px solid #2F3336;
  padding: 13px 16px;
  border-top: none;
  border-bottom: 8px solid #2F3336;
  margin: auto;
`;

const _Feed = styled.div`
    margin-top: 20px;
    margin-left: 20px;
`