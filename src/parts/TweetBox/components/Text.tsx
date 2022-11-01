import {Editor, EditorState} from 'draft-js'

type props = {
  editorState: EditorState
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>
  handleOnClick: ()=>void
}
export const Text = (props: props) => {
    return(
        <>
        <div>
          <h1>editor</h1>
          <div style={{width: '100px'}}>
          <Editor
            editorState={props.editorState}
            onChange={props.setEditorState}
            />
          <button onClick={props.handleOnClick}>確認</button>
          </div>
        </div>
    </>
    )
}