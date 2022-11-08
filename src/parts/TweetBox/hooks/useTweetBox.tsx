import React, { useState } from 'react'
import {EditorState} from 'draft-js'

export const useTitle = () => {
  const [inputEl, setInputEl] = useState('')
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputEl(e.target.value)
  }
  const clearInputEl = () => {
    setInputEl('')
  }
  return {inputEl, onChangeInput, clearInputEl}
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
        return a+'%'
      case a > 100:
        return '100%'
    }
  }

  const MAX = 280, REDZONE = 260, WARNING = 240

  const styles = {
    MAX: {
      background: 'red',
      width: width()
    },
    WARNING: {
      background: 'yellow',
      width: width()
    },
    default: {
      background: 'blue',
      width: width()
    }
  }

  const style = () => {
    switch(true){
      //280 ~
      case MAX < current:
        return styles.MAX
      //260 ~ 280
      case REDZONE < current && current <= MAX:
        return styles.MAX
      //240 ~ 260
      case WARNING < current && current <= REDZONE:
        return styles.WARNING
      // ~ 240
      default: 
        return styles.default
    }
  }

  return {style}
}