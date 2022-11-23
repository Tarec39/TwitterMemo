import { useState } from 'react'
import {EditorState} from 'draft-js'

export const useTitle = () => {
  const [titleEditorState, setTitleEditorState] = useState(
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

export const useMeter = (current: number) => {

  const width = () => {
    let a = (current/MAX)*100
    switch(true){
      default:
        return a
      case a > 100:
        return 100
    }
  }

  const MAX = 280, REDZONE = 260, WARNING = 240

  const styles = () => {
    switch(true){
      //280 ~
      case MAX < current:
        return '#F4212D'
      //260 ~ 280
      case REDZONE < current && current <= MAX:
        return '#F4212D'
      //240 ~ 260
      case WARNING < current && current <= REDZONE:
        return '#F0C808'
      // ~ 240
      default: 
        return '#1C9BEF'
    }
  }

  return {styles, width}
}