import {Editor, EditorState} from 'draft-js'
import {useEffect, useState} from 'react'

export const Text = () => {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
      );
    return(
        <>
        <div>
          <h1>editor</h1>
          <div>
          <Editor
            editorState={editorState}
            onChange={setEditorState}
            />
          </div>
        </div>
    </>
    )
}