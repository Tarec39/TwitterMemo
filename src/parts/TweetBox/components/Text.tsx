import {Editor, EditorState} from 'draft-js'
import {useEffect, useState} from 'react'

export const Text = () => {
    const [editorState, setEditorState] = useState(
      () => EditorState.createEmpty()
    )

    const handleOnClick = () => console.log('');


    return(
        <>
        <div>
          <h1>editor</h1>
          <div style={{width: '100px'}}>
          <Editor
            editorState={editorState}
            onChange={setEditorState}
            />
          <button onClick={handleOnClick}>確認</button>
          </div>
        </div>
    </>
    )
}