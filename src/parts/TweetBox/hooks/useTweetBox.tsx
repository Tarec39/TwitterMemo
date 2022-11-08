import { useState } from 'react'
import {EditorState, CompositeDecorator} from 'draft-js'

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


export const useCharCounter = (text: string) => {
  
    const countChar = () =>{
      //半角と\nは+1、全角は+2
      let c, count;
      count=0
      for (let i = 0; i < text.length; i++) {
        c = text.charAt(i);
          (c == '\n' || c == ' ') ? count++
        : (isFullWidth(c)) ? count += 2
        : count++
      }
      return {count}
    }
      
    const isFullWidth = (c:string) => (c.match(/[^\x00-\xff]/)) ? true: false

    const countMaxChar = () => {
      const maxChar = Math.trunc((280-countChar().count)/2)
      // const kijyun = countChar() < 280 
      return maxChar
    }

    return{countChar ,countMaxChar}
}