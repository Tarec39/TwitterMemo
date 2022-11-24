//Libraries
import styled from 'styled-components';
import {EditorState} from "draft-js";
//Common Parts
import { ThreadBtn } from "../Buttons/ThreadBtn";
//Parts
import { Title } from "../Text Input/Title";
import { Text } from "../Text Input/Text";
import { TweetButton } from "../Buttons/TweetButton";
import { WordCountIndicator } from "./WordCount";

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
    handleNavigateThread:()=>void
    handleThreadable:(text: string) => boolean
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
        </>:''
        }
        
        {/* 未実装 */}
        {/* <ThreadBtn
            onClick={props.handleNavigateThread}
            isThreadable={props.handleThreadable(props.text)}
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
