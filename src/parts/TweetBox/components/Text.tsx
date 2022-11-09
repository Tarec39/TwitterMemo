import {Editor, EditorState} from 'draft-js'

type props = {
  editorState: EditorState
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>
}


export const Text = (props: props) => {

    return(
        <>
        <div>
          <div style={styles.editor}>
          <Editor
            editorState={props.editorState}
            onChange={props.setEditorState}
            />
          </div>
        </div>
    </>
    )
}

const styles = {
  editor: {
    margin: '0 0 0 10px',
    border: 'solid',
    width: '300px'
  }
}