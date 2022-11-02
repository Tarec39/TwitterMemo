import { useState } from 'react'
import { Editor, EditorState } from 'draft-js'

export const useTitle = () => {
  const [ titleEditorState, setTitleEditorState] = useState(
    () => EditorState.createEmpty()
  )

  return{titleEditorState, setTitleEditorState}
}

export const useText = () => {
  const [textEditorState, setTextEditorState] = useState(
    () => EditorState.createEmpty()
  )
  return{textEditorState, setTextEditorState}
}

export const useCharProcess = (editorState: EditorState) => {
  
    const countChar = () =>{
      const str = editorState.getCurrentContent().getPlainText()
      let count = 0
      
      //半角と\nは+1、全角は+2
      for (let i = 0; i < str.length; i++) {
        let c = str.charAt(i);
          (c == '\n' || c == ' ') ? count++
        : (isFullWidth(c)) ? count += 2
        : count++
      }
      return count
    }
      
    const isFullWidth = (c:string) => (c.match(/[^\x00-\xff]/)) ? true: false

    const calcRemainChar = () => {
      const remainChar = Math.trunc((280-countChar())/2)
      // console.log(remainChar)
      return remainChar
    }

    return{calcRemainChar}
}