import { useState, useEffect } from 'react'

export const useTitle = () => {
  const [inputEl, setInputEl] = useState<string>('')

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputEl(e.target.value)
  }

  return {inputEl,onChangeInput, setInputEl}
}

export const useText = () => {
  const [textAreaEl, setTextAreaEl] = useState<string>('')

  const onChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaEl(e.target.value)
  }

  const calcRow = () => {
    let rowNums = textAreaEl.split('\n').length
    return rowNums
  }

  return{textAreaEl, onChangeTextArea, calcRow, setTextAreaEl}
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
      console.log(remainChar)
      return remainChar
    }
    return{calcRemainChar}
}
