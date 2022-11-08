import {Editor, EditorState} from 'draft-js'

type props = {
  editorState: EditorState
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>
}


export const Text = (props: props) => {

    return(
        <>
        <div>
          <h1>editor</h1>
          <div style={{width: '500px'}}>
          <Editor
            editorState={props.editorState}
            onChange={props.setEditorState}
            />
          </div>
        </div>
    </>
    )
}