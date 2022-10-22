import {useState} from 'react'

export const useTitle = () => {
  const [inputEl, setInputEl] = useState<string>('')
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputEl(e.target.value)
  }

  return {inputEl, onChangeInput}
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

  return{textAreaEl, onChangeTextArea, calcRow}
}