import {Editor, EditorState} from 'draft-js'
import styled from 'styled-components'
type props = {
  editorState: EditorState
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>
}


export const Text = (props: props) => {

    return(
        <>
        <div>
          <DraftStyle>
          <Editor
            editorState={props.editorState}
            onChange={props.setEditorState}
            />
          </DraftStyle>
        </div>
    </>
    )
}

const DraftStyle = styled.div`
  height: 28px;
  padding: 2px 0;
`