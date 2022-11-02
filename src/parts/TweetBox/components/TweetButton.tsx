import {EditorState} from 'draft-js'

type props = {
    handlePostTweet: ()=>void
    editorState: EditorState
    charNum: number
}

export const TweetButton = (props:props) => {
    const plainText = props.editorState.getCurrentContent().getPlainText()
    const isDisabled = (plainText !=='' && props.charNum >= 0 ) ? false :true;
    return(
        <div>

        <button 
        onClick={props.handlePostTweet}
        disabled={isDisabled}
        >ツイートする</button>

        </div>
    )
}