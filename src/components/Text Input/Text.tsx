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
          {(props.editorState.getCurrentContent().getPlainText().length===0)
            ?<PlaceHolder>いまどうしてる？</PlaceHolder>
            :''
          }
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
  padding: 2px 0;
`

const PlaceHolder = styled.div`
  position: absolute;
  color: #71767B;
  z-index: -1;
`