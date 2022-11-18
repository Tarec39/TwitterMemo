import styled from 'styled-components';
import {EditorState} from "draft-js";
//useContext
//Common Parts
// import { ThreadBtn } from "../../components/ThreadBtn";
//Parts
import { Title } from "./components/Title";
import { Text } from "./components/Text";
import { TweetButton } from "./components/TweetButton";
import { WordCountIndicator } from "./components/WordCount";

type props = {
    titleEditorState: EditorState
    setTitleEditorState: React.Dispatch<React.SetStateAction<EditorState>>
    textEditorState: EditorState
    setTextEditorState: React.Dispatch<React.SetStateAction<EditorState>>
    text: string
    countMaxChar: ()=>number
    width: ()=>number
    styles: ()=>string
    handlePostTweet: ()=>void
    countChar: ()=>{count:number}
}
export const TweetBox = (props:props) => {

    return(
        <>
        <Title
            editorState={props.titleEditorState}
            setEditorState={props.setTitleEditorState}
        />

        <Text
            editorState={props.textEditorState}
            setEditorState={props.setTextEditorState}
        />
        <A>
        {(props.text.length!==0)
        ?
        <>
        <WordCountIndicator
            maxChar={props.countMaxChar()}
            char={props.width()}
            styles={props.styles()}
            />
        <Partition></Partition>
        </>
            :''
        }

        {/* <ThreadBtn
            onClick={handleNavigateThread}
            isThreadable={handleThreadable(text)}
        /> */}
        <TweetButton 
            handlePostTweet={props.handlePostTweet}
            num={props.countChar().count}
            text={props.textEditorState.getCurrentContent().getPlainText()}
        />
        </A>
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
margin-left: calc(10px);
height: 31px;
background-color: rgb(62, 65, 68);
margin-right: 12px;
width: 1px;
align-self: center;
`
