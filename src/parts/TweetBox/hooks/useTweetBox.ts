import { useState } from 'react'
import { EditorState } from 'draft-js'

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

export const useCharProcess = (value: string) => {
    const getCharNum = () => {
      let charNum = 0;
      for (let i = 0; i < value.length; i++) {
      (value[i].match(/[ -~]/)) ? charNum += 1 : charNum += 2;
      }
      return charNum
    }
    const calcRemainChar = () => {
      const remainChar = Math.trunc((280-getCharNum())/2)
      // console.log(remainChar)
      return remainChar
    }
    return{calcRemainChar}
}