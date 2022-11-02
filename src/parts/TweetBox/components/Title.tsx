import {Editor, EditorState} from 'draft-js'

type props = {
    editorState: EditorState
    setEditorState: React.Dispatch<React.SetStateAction<EditorState>>
}

export const Title =(props: props)=> {
    return(
        <>
        <div>
            <Editor
            editorState={props.editorState}
            onChange={props.setEditorState}
            />
        </div>
        </>
    )
}

